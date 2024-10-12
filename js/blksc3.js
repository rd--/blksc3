import * as sc from '../lib/jssc3/dist/jssc3.js';
import * as sl from '../lib/spl/dist/sl.js';

import { initCodeGen } from './gen.js';
import { initCodeGenUgen } from './gen-ugen.js';
import { loadNotes } from './notes.js';

function addWorkspaceEnv(input) {
	const gate = sc.NamedControl('workspaceGate', 1);
	const attackTime = sc.NamedControl('workspaceAttackTime', 0.01);
	const releaseTime = sc.NamedControl('workspaceReleaseTime', 0.1);
	const envelope = sc.Asr(gate, attackTime, releaseTime, 'sin');
	return sc.Mul(input, envelope);
}

function graphMenuInit(menuId, graphDir, loadProc) {
	sc.menuOnChangeWithOptionValue(menuId, (optionValue) => {
		const graphPath = `help/${graphDir}/${optionValue}`;
		// console.debug(graphPath);
		loadProc(graphPath);
	});
}

export class Blk {

	constructor(Blockly, withUiCtl, trackHistory) {
		this.Blockly = Blockly;
		this.trackHistory = trackHistory; // boolean
		this.config = null;
		this.workspace = null;
		this.layouts = null;
		this.naming = 'Symbolic';
		this.whichToolbox = 'Complete';
		this.init(withUiCtl);
		this.programOracle = [];
	}

	init(withUiCtl) {
		initCodeGen(Blockly);
		initCodeGenUgen(Blockly);
		this.Blockly.ContextMenuItems.registerCommentOptions();
		this.initWorkspaceContextMenu();
		this.setColours();
		this.loadBlockMessages(`json/${this.naming}Messages.json`);
		this.loadBlockDefinitions('json/BlockDefinitions.json');
		this.loadBlockDefinitions('json/UgenBlockDefinitions.json');
		this.loadProgramOracle('json/ProgramOracle.json');
		this.loadJsonToolbox('json/CompleteToolbox.json', () => {
			this.workspace.addChangeListener(this.onWorkspaceChange());
			this.maybeLoadHelpFileFromUrlParam('e');
		});
		sc.connectButtonToInput('jsonInputFileSelect', 'jsonInputFile'); // Initialise .json file selector
		graphMenuInit('programsMenu', 'Program', (path) => this.loadHelpGraph(path));
		sc.fetchJson('json/ProgramsMenu.json', { cache: 'no-cache' })
			.then((json) => sc.selectAddKeysAsOptions('programsMenu', json.programsMenu));
		graphMenuInit('helpMenu', 'Reference', (path) => this.loadHelpGraph(path));
		sc.fetchJson('json/HelpMenu.json', { cache: 'no-cache' })
			.then((json) => sc.selectAddKeysAsOptions('helpMenu', json.helpMenu));
		graphMenuInit('guideMenu', 'Guide', (path) => this.loadHelpGraph(path));
		sc.fetchJson('json/GuideMenu.json', { cache: 'no-cache' })
			.then((json) => sc.selectAddKeysAsOptions('guideMenu', json.guideMenu));
		graphMenuInit(
			'smallProgramsMenu',
			'Program',
			(path) => this.loadHelpGraph(path)
		);
		sc.fetchJson('json/SmallProgramsMenu.json', { cache: 'no-cache' })
			.then((json) =>
				sc.selectAddKeysAsOptions('smallProgramsMenu', json.smallProgramsMenu)
			);
		sc.userPrograms.storageKey = 'blksc3UserPrograms/json';
		sc.userProgramsMenuInit(
			'userMenu',
			(jsonText) => this.loadJson(jsonText),
		);
		sc.selectOnChange('actionsMenu', function (menuElement, entryName) {
			sc.userActionDo(entryName, 'userMenu', 'userProgramArchiveFile');
			menuElement.selectedIndex = 0;
		});
		this.layoutMenuInit();
		if (withUiCtl) {
			sc.fetchUtf8('html/ui-ctl.html', { cache: 'no-cache' })
				.then(sc.setterForInnerHtmlOf('uiCtlContainer'));
		}
	}

	initConfig(toolbox) {
		this.config = {
			media: 'lib/blockly-11.1.1/media/',
			renderer: 'thrasos', // geras thrasos zelos
			sounds: false,
			toolbox: toolbox,
			rtl: false,
			move: {
				scrollbars: {
					horizontal: true,
					vertical: true
				},
				drag: true,
				wheel: false,
			},
			zoom: {
				controls: true,
				wheel: true,
				startScale: 1.0,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2,
				pinch: true,
			},
			trashcan: false,
		};
	}

	// Setup workspace on loading a new program.
	// Resets to unit scale and centers blocks.
	onLoad() {
		this.workspace.setScale(1);
		this.workspace.scrollCenter();
	}

	// Load program from .json definition.
	// Clears any existing blocks.
	loadJson(jsonText) {
		this.workspace.clear();
		this.Blockly.serialization.workspaces.load(
			JSON.parse(jsonText),
			this.workspace,
		);
		this.onLoad();
	}

	// Read selected .json file.
	readInputJson(inputId) {
		const inputFile = sc.getFileInputFile(inputId, 0);
		inputFile.text().then((jsonText) => this.loadJson(jsonText));
	}

	/*
	  c.f. https://github.com/google/blockly/issues/3921
	  c.f. https://groups.google.com/g/blockly/c/GC5TsBUVVbE/
	*/
	displayScrollbars(showScrollbars) {
		const displayValue = showScrollbars ? '' : 'none';
		this.workspace.scrollbar.vScroll.svgHandle.style.display = displayValue;
		this.workspace.scrollbar.hScroll.svgHandle.style.display = displayValue;
	}

	// Set properties given layout configuration name.
	setLayout(configName) {
		// console.debug(`setLayout: ${configName}`);
		if (configName) {
			const w = document.getElementById('blocklyContainer');
			const c = document.getElementById('blkCtl');
			const n = document.getElementById('blkNotes');
			const o = this.layouts[configName];
			w.style.height = o.workspaceHeight;
			w.style.width = o.workspaceWidth;
			c.style.left = o.ctlLeft;
			c.style.width = o.ctlWidth;
			n.style['font-size'] = o.notesFontSize;
			n.style.height = o.workspaceHeight;
			this.Blockly.svgResize(this.workspace);
		}
	}

	/* Set event listener for layout menu.

	   %×% = proportional
	   1366×768 (x270) =16/9
	   1440×900 (macbook/3) = 8/5
	   1680×1050 (macbook/4) = 8/5
	   1920×1080 (x1) = 16/9
	*/
	layoutMenuInit() {
		const select = document.getElementById('blkLayoutMenu');
		select.addEventListener('change', (e) => this.setLayout(e.target.value));
		sc.fetchJson('json/Layouts.json', { cache: 'no-cache' })
			.then((obj) => this.layouts = obj);
	}

	// Configure and inject Blockly given toolbox definition.
	injectWithToolbox(toolbox, onCompletion) {
		this.initConfig(toolbox);
		this.workspace = this.Blockly.inject('blocklyContainer', this.config);
		this.displayScrollbars(false);
		// console.debug('injectWithToolbox: injection completed');
		onCompletion(this);
	}

	initWorkspaceContextMenu() {
		const makeEntry = (name, handler) => {
			let item = {
				displayText: name,
				id: 'sc_' + name,
				weight: 100,
				preconditionFn: (scope) => { return 'enabled'; },
				callback: (scope) => { handler(); },
				scopeType: this.Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
			};
			this.Blockly.ContextMenuRegistry.registry.register(item);
		};
		makeEntry('Play', () => { this.playCode() });
		makeEntry('Replace', () => { this.replaceCode() });
		makeEntry('Reset', () => { globalScSynth.reset() });
	}

	getCodeSl() {
		const slText = this.Blockly.JavaScript.workspaceToCode(this.workspace);
		// console.debug('getCodeSl', slText);
		return slText;
	}

	getCodeJs() {
		const slText = this.getCodeSl();
		console.debug(`getCodeJs: slText: ${slText}`);
		const jsText = sl.rewriteString(slText);
		// console.debug(`getCodeJs: jsText: ${jsText}`);
		return jsText;
	}

	evalCode() {
		return eval(this.getCodeJs());
	}

	playCode() {
		globalScSynth.playUgenAt(addWorkspaceEnv(this.evalCode()), 0, -1, 1, []);
	}

	replaceCode() {
		globalScSynth.sendOsc(
			sc.n_set(-1, [['workspaceReleaseTime', 3], ['workspaceGate', 0]]),
		);
		globalScSynth.playUgenAt(
			addWorkspaceEnv(this.evalCode()),
			0,
			-1,
			1,
			[
				[
					'workspaceAttackTime',
					3,
				],
				[
					'workspaceReleaseTime',
					3
				]
			]);
	}

	printCode() {
		return sc.prettyPrintSyndefOf(this.evalCode());
	}

	setColours() {
		this.Blockly.utils.colour.setHsvSaturation(0.20);
		this.Blockly.utils.colour.setHsvValue(0.95);
		// https://developers.google.com/blockly/guides/create-custom-blocks/block-colour#colour_references
		this.loadBlockMessages('json/ColourScheme.json');
	}

	loadBlockMessages(fileName) {
		sc.fetchJson(fileName, { cache: 'no-cache' })
			.then((messages) => {
				for (const key in messages) {
					const value = messages[key];
					// console.debug(`load_block_messages: ${key} = ${value}`);
					this.Blockly.Msg[key] = messages[key];
				}
			});
	}

	loadBlockDefinitions(fileName) {
		sc.fetchJson(fileName, { cache: 'no-cache' })
			.then(this.Blockly.defineBlocksWithJsonArray);
	}

	loadProgramOracle(fileName) {
		sc.fetchJson(fileName, { cache: 'no-cache' })
			.then(array => this.programOracle = array);
	}

	runOracle() {
		if (this.programOracle.length > 0) {
			const which = sc.arrayChoose(this.programOracle);
			const path = `help/Program/${which}`;
			console.debug(`runOracle: ${path}`);
			this.workspace.clear();
			this.loadHelpGraph(path);
		} else {
			console.log('runOracle: Empty oracle?');
		}
	}

	loadJsonToolbox(fileName, onCompletion) {
		sc.fetchJson(fileName, { cache: 'no-cache' })
			.then(toolbox => this.injectWithToolbox(toolbox, onCompletion));
	}

	// Read and load .json format program from Url.
	fetchJson(jsonUrl) {
		sc.fetchUtf8(sc.urlAppendTimeStamp(jsonUrl), { cache: 'no-cache' })
			.then((jsonText) => this.loadJson(jsonText));
	}

	loadHelpGraph(graphPath) {
		this.fetchJson(`${graphPath}.json`, false);
		loadNotes(`${graphPath}.sl`)
			.then(sc.setterForInnerHtmlOf('blkNotes'));
		if (this.trackHistory) {
			sc.windowUrlSetParam('e', graphPath);
		}
	}

	// If the Url has fileParamKey, load the named .json/.sl files.
	maybeLoadHelpFileFromUrlParam(fileParamKey) {
		const fileName = sc.urlGetParam(fileParamKey);
		if (fileName) {
			this.loadHelpGraph(fileName);
		}
	}

	nextNamingScheme() {
		this.naming = (this.naming == 'Symbolic' ? 'Text' : 'Symbolic');
		this.loadBlockMessages(`json/${this.naming}Messages.json`);
	}

	nextToolbox() {
		this.whichToolbox = (this.whichToolbox == 'Complete' ? 'Small' : 'Complete');
		sc.fetchJson(`json/${this.whichToolbox}Toolbox.json`, { cache: 'no-cache' })
			.then(tree => this.workspace.updateToolbox(tree))
	}

	onWorkspaceChange() {
		// console.debug('onWorkspaceChange');
		return (event) => {
			// console.debug('onWorkspaceChange', event.type, event.element);
			if (event.type == Blockly.Events.BLOCK_CHANGE && event.element == 'field') {
				const aBlock = this.workspace.getBlockById(event.blockId);
				if (aBlock) {
					// console.debug('onWorkspaceChange', aBlock.type);
					if (aBlock.type == 'sc3_ControlField') {
						// console.debug('onWorkspaceChange', aBlock.getFieldValue('VALUE'));
						globalScSynth.sendOsc(
							sc.n_set1(-1, aBlock.id, aBlock.getFieldValue('VALUE')),
						);
					}
				}
			}
		};
	}

	// Get .json serialization of workspace.
	workspaceJson() {
		const jsonData = this.Blockly.serialization.workspaces.save(this.workspace);
		const jsonText = JSON.stringify(jsonData, null, ' ');
		return jsonText;
	}

}

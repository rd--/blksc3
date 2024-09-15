# blksc3 setup

Requirements:

- [SuperCollider](https://github.com/supercollider/supercollider) (Music Synthesiser)
- Html browser:
  [Firefox](https://www.mozilla.org/firefox/)
  or [Chromium](https://www.chromium.org/)
  or [Safari](https://www.apple.com/safari/)
  or equivalent
- Http server:
  [Python](https://www.python.org/)
  or [Budo](https://www.npmjs.com/package/budo)
  or [Lighttpd](https://www.lighttpd.net/)
  or equivalent

Requirements to connect to SuperCollider:

- [stsc3](https://gitlab.com/rd--/stsc3),
  [sc3-rdl](https://gitlab.com/rd--/sc3-rdl) and
  [sc3-rdu](https://gitlab.com/rd--/sc3-rdu) (SuperCollider Libraries)
- [blksc3](https://github.com/rd--/blksc3/releases) or equivalent
  ([Websocket](https://datatracker.ietf.org/doc/html/rfc6455) to [OpenSoundControl](https://opensoundcontrol.stanford.edu/) bridge)

Optional components:

- For third party unit generators:
  [sc3-plugins](https://github.com/supercollider/sc3-plugins),
  [portedplugins](https://github.com/madskjeldgaard/portedplugins)
- For unit generator graph drawings:
  [sc3-dot](https://gitlab.com/rd--/sc3-dot), [graphviz](https://graphviz.org/)

## SuperCollider

To install required libraries:

    Quarks.install("https://gitlab.com/rd--/stsc3.git");
    Quarks.install("https://gitlab.com/rd--/sc3-rdl.git");
    Quarks.install("https://gitlab.com/rd--/sc3-rdu.git");

To install optional libraries:

    Quarks.install("https://gitlab.com/rd--/sc3-dot.git");

Recompile the class library to load the new libraries into the interpreter.

To process incoming messages from `blksc3` start a listener with:

    EvalListener.init;

Some of the programs included with blksc3 require the SuperCollider synthesiser allocate more resources than it does by default.
To run these programs set the following server options before starting the server:

    s.options.numWireBufs = 512;
    s.options.memSize = 524288;

The listener can be started and the server options can be set in the SuperCollider _startup.scd_ file,
in which case they will run automatically whenever SuperCollider starts.

## [MacOS](https://www.apple.com/macos/) Instructions

- Download the MacOS binary for the [blksc3](https://github.com/rd--/blksc3/releases) command line program and unpack it
- Start blksc3 in [Terminal](https://support.apple.com/guide/terminal/) by typing `./blksc3 stc-to-osc`
- Download the [blksc3](https://gitlab.com/rd--/blksc3) archive and `cd` to the blksc3 directory
- Start an Http Server by typing: `budo` or `python3 -m http.server`
- Open browser and go to http://127.0.0.1:9966/blksc3.html
- Start SuperCollider
- In the blksc3 browser window load a graph by selecting from the _Graph Programs_ menu
- Click _Play_ to send the program to SuperCollider.
- Click _Reset_ to stop the sound.

## Python Instructions

Install python according to the instructions for your operating system.
To start a local http server type:

    python3 -m http.server

The server will print the address to navigate to.

## Node and Npm Instructions

To install [node](https://nodejs.org/) and [npm](https://www.npmjs.com/):

In [Debian](https://www.debian.org/) type:

    > sudo apt install npm

To set the npm install prefix, for instance to `~/opt`, type:

    > npm config set prefix ~/opt

In MacOs first follow the instructions at [https://brew.sh/](brew.sh) to install Homebrew, then in Terminal type:

    > brew update
    > brew install node

In Windows follow the instructions at <https://nodejs.org/en/download/>.

## Budo Instructions

To install [budo](https://www.npmjs.com/package/budo) type:

    > npm install budo -g

## Caveats

The blksc3 layout is fixed, however the default size is proportional to the viewport and there is a menu to select layouts for various display sizes.

## Credits

Thanks to [Fredrik Olofsson](https://fredrikolofsson.com/) for working out how to set all this up, fixing various mistakes, and writing it down.

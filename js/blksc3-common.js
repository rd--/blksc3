'use strict';

// String

// string -> [string]
String.prototype.lines = function () {
    return this.split('\n');
}

// string -> string -> bool
String.prototype.isPrefixOf = function (aString) {
    return aString.slice(0, this.length) === this;
}

// Array

// [string] -> string
Array.prototype.unlines = function () {
    return this.join('\n');
}

// [t] -> (t -> bool) -> [t]
// [1, 2, 3, 4].takeWhile(x => x < 3) //=> [1, 2]
Array.prototype.takeWhile = function(predicate) {
    var [x, ...xs] = this;
    if (this.length > 0 && predicate(x)) {
        return [x, ...xs.takeWhile(predicate)];
    } else {
        return [];
    }
}

// [t] -> (t -> bool) -> [t]
// [1, 2, 3, 4].dropWhile(x => x < 3) //=> [3, 4]
Array.prototype.dropWhile = function(predicate) {
    var [x, ...xs] = this;
    if (this.length > 0 && predicate(x)) {
        return xs.dropWhile(predicate);
    } else {
        return this;
    }
}

// [t] -> [t]
// [1, 2, 3, 4].tail() // => [2, 3, 4]
Array.prototype.tail = function() {
    return this.slice(1, this.size);
}

// [t] -> t
Array.prototype.head = function() {
    return this[0];
}

// [1, 2, 3, 4].at(3) == 4
Array.prototype.at = function(index) {
    return this[index];
}

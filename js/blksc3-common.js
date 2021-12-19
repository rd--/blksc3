// String -> [String]
function string_lines(string) {
    return string.split('\n');
}

// [String] -> String
function array_unlines(array) {
    return array.join('\n');
}

// String -> String -> Bool
function string_is_prefix_of(prefix, string) {
    return string.slice(0, prefix.length) === prefix;
}

// [t] -> (t -> Bool) -> [t] ; array_take_while([1, 2, 3, 4], x => x < 3) == [1, 2]
function array_take_while(array, predicate) {
    var [x, ...xs] = array;
    if (array.length > 0 && predicate(x)) {
        return [x, ...array_take_while(xs, predicate)];
    } else {
        return [];
    }
}

// [t] -> (t -> Bool) -> [t] ; array_drop_while([1, 2, 3, 4], x => x < 3) == [3, 4]
function array_drop_while(array, predicate) {
    var [x, ...xs] = array;
    if (array.length > 0 && predicate(x)) {
        return array_drop_while(xs, predicate);
    } else {
        return array;
    }
}

// [t] -> [t] ; array_tail([1, 2, 3, 4]) // => [2, 3, 4]
function array_tail(array) {
    return array.slice(1, array.size);
}

// [t] -> t
function array_head(array) {
    return array[0];
}

// array_at([1, 2, 3, 4], 3) == 4
function array_at(array, index) {
    return array[index];
}

Array.prototype.takeWhile = function(predicate) {
    return array_take_while(this, predicate);
}

Array.prototype.dropWhile = function(predicate) {
    return array_drop_while(this, predicate);
}

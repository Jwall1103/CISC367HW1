// Maps are also called dictionaries, and are really just simple objects

/**
 * Modify and return the given map as follows: if the key "a" has a value,
 * set the key "b" to have that same value. In all cases remove the key "c",
 * leaving the rest of the map unchanged.
 */

export function mapShare(someMap): object {
    if (someMap["a"] != null) {
        someMap["b"] = someMap["a"];
    }
    delete(someMap["c"]);
    return someMap;
}

/**
 * A Grocery object will have the fields "bananas", "apples", and "oranges".
 * Add together the number of bananas, apples, and oranges in a grocery object.
 */
export function addGroceries(grocery): number {
    let sum = 0;
    for (let key in grocery) {
        sum += grocery[key];
    }
    return sum;
}
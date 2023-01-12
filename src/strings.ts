/**
 * Given a string, return a new string where "not " has been added to the
 * front. However, if the string already begins with "not", return the
 * string unchanged.
 */
export function notString(str: string): string {
    if (str.startsWith("not"))
        return str;
    else
        return "not " + str;
}

/**
 * Given a string, take the last char and return a new string with the last char
 * added at the front and back, so 'cat' yields 'tcatt' The original string will be
 * length 1 or more.
 */
export function backAround(str: string): string {
    var last = str.substring(str.length - 1);
    return last + str + last;
}

/**
 * We'll say that a "triple" in a string is a char appearing three times in a row.
 * Return the number of triples in the given string. The triples may overlap.
 */
export function countTriple(str: string): number {
    let count = 0;

    for (let i = 0; i <= str.length-2; i++) {
        let triple = str.substring(i, i+3);
        if (triple[0] == triple[1] && triple[1] == triple[2]){
            count += 1;
        }
    }
    return count;
}
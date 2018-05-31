/**
 * @function assign
 * @description Creates a new object changing the values of the `obj` with the ones in `source`.
 * @param {Object} obj - The original object.
 * @param {Object} source - An object that will overwrite (or add) values from the original object.
 * @returns {Object} a new object with new assigned values.
 */
function assign(obj, source) {
    // TODO: Use a copy of the original obj.
    let newObj = obj;
    let baseAssign = Object.assign;

    if (!baseAssign) {
        baseAssign = function manualAssign(obj, source) {
            for (let key in source) {
                obj[key] = source[key];
            }
        }
    }

    return baseAssign(newObj, source);
}

module.exports = assign;

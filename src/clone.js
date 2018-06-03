/**
 * @function clone
 * @description Creates a shallow or deep clone of an object.
 * @param {Object} obj - The original object to clone.
 * @param {Boolean} deepClone - A flag to toggle the deepClone.
 * @returns {Object} a new object cloned from the previous one.
 */
function clone(obj, deepClone) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = clone;

/**
 *Delete all items in the localStorage that are not specified as arguments
 *
 * @param {*} args  keys that should not be deleted from localStorage
 */
export const cleanLocalStorage = (...args) => {
  Object.keys({ ...localStorage })
    .filter(e => !args.includes(e))
    .forEach(e => localStorage.removeItem(e));
};

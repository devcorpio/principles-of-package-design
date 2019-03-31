/**
 * In order to improve the understanding of this code, this file it is supposing to implement the following interface:
 *
 * interface ServiceContainerInterface {
 *  function get(name);
 *  function set(name, fn);
 * }
 *
 * Quack Quack Quack 🦆 typing :D
 */

function serviceContainer() {
    function get(name) {
        // something here...
    }

    function set(name, fn) {
        // something here
    }

    return {
        get,
        set,
    };
}

module.exports = serviceContainer;

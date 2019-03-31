/**
 * In order to improve the understanding of this code, this file it is supposing to implement the following interfaces:
 *
 * interface MutableServiceContainerInterface {
 *  function set(name, fn);
 * }
 *
 * interface ServiceLocatorInterface {
 *  function get(name);
 * }
 *
 * Quack Quack Quack 🦆 typing :D
 */

function serviceContainer() {
    function set(name, fn) {
        // something here
    }

    function get(name) {
        // something here...
    }

    return {
        get,
        set,
    };
}

module.exports = serviceContainer;

/**
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

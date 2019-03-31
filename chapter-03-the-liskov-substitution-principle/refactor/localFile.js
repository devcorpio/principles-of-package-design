/**
 * In order to improve the understanding of this code,
 * this file it is supposing to implement the following interface:
 *
 * interface FileInterface {
 *  function rename(name);
 *  function changeOwner(user, group);
 * }
 *
 *
 * Quack Quack Quack 🦆 typing :D
 */

function localFile() {
    function rename(name) {}

    function changeOwner(user, group) {
        //make something
    }

    return {
        rename,
        changeOwner,
    };
}

module.exports = localFile;

/**
 * In order to improve the understanding of this code,
 * this file it is supposing to implement the interface FileWithOwnerInterface
 *
 * interface FileInterface {
 *  function rename(name);
 * }
 *
 *
 * interface FileWithOwnerInterface extends FileInterface {
 *  function rename(name);
 * }
 *
 * Quack Quack Quack 🦆 typing :D
 */

function dropboxFile() {
    function rename(name) {}

    return {
        rename,
    };
}

module.exports = dropboxFile;

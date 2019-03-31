/**
 * In order to improve the understanding of this code, this file it is supposing to implement the following interface:
 *
 * interface UserProviderInterface {
 *  function findUser(username);
 * }
 *
 * Quack Quack Quack 🦆 typing :D
 */

/**
 * @param {UserProviderInterface} userProvider
 */
function authentication(userProvider) {
    function checkCredentials(username, password) {
        const user = userProvider.findUser(username);

        if (user === null) {
            new Error('User not found');
        }

        //validate password...
    }

    return {
        checkCredentials,
    };
}

module.exports = authentication;

/**
 * @implements {UserProviderInterface}
 */
function mysqlUserProvider(connection) {
    function findUser(username) {
        return connection.fetchAssoc('SELECT * FROM users WHERE username = ?', [
            username,
        ]);
    }

    return {
        findUser,
    };
}

module.exports = mysqlUserProvider;

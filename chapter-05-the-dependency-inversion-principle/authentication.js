function authentication(connection) {
    function checkCredentials(username, password) {
        const user = connection.fetchAssoc(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );

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

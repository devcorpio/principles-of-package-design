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

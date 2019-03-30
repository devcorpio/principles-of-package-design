function confirmationMailMailer(confirmationMailFactory, mailer) {
    function sendTo(user) {
        const message = createMessageFor(user);

        sendMessage(message);
    }

    function createMessageFor(user) {
        return confirmationMailFactory.createMessageFor(user);
    }

    function sendMessage(message) {
        mailer.send(message);
    }

    return {
        sendTo,
    };
}

module.exports = confirmationMailMailer;

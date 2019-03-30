function confirmationMailMailer(templating, translator, mailer) {
    function sendTo(user) {
        const message = createMessageFor(user);

        sendMessage(message);
    }

    function createMessageFor(user) {
        const subject = translator.translate('Confirm your mail address');

        const body = templating.render('confirmationMail.html.tpl', {
            confirmationCode: user.getConfirmationCode(),
        });

        const message = new Message(subject, body);
        message.setTo(user.getEmailAddress());

        return message;
    }

    function sendMessage(message) {
        mailer.send(message);
    }

    return {
        sendTo,
    };
}

module.exports = confirmationMailMailer;

function confirmationMailFactory(templating, translator) {
    function createMessageFor(user) {
        const subject = translator.translate('Confirm your mail address');

        const body = templating.render('confirmationMail.html.tpl', {
            confirmationCode: user.getConfirmationCode(),
        });

        const message = new Message(subject, body);
        message.setTo(user.getEmailAddress());

        return message;
    }

    return {
        createMessageFor,
    };
}

module.exports = confirmationMailFactory;

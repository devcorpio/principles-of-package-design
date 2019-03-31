/**
 * @param {ServiceLocatorInterface} serviceContainer
 */
function someController(serviceLocator) {
    function indexAction() {
        const mailer = serviceLocator.get('mailer');
    }

    return {
        indexAction,
    };
}

module.exports = someController;

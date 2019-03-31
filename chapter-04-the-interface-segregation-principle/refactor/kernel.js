function kernel() {
    /**
     * @param {MutableServiceContainerInterface} serviceContainer
     */
    function initializeServiceContainer(serviceContainer) {
        serviceContainer.set('whateveryouwant');
    }

    return {
        initializeServiceContainer,
    };
}

module.exports = kernel;

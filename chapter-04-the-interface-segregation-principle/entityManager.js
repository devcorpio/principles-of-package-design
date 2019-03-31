function entityManager() {
    function persist(entity) {
        // make something here...
    }

    function flush() {
        // make something here
    }

    function getUnitOfWork() {
        // make something here
    }

    return {
        persist,
        flush,
        getUnitOfWork,
    };
}

module.exports = entityManager;

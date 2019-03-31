function Query(entityManager) {
    function someMethod() {
        entityManager.getUnitOfWork();
    }

    return {
        someMethod,
    };
}

module.exports = Query;

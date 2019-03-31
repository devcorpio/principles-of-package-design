/**
 * In order to improve the understanding of this code, this file it is supposing to implement the following interfaces:
 *
 * interface PersistsEntitiesInterface {
 *  function persist(entity);
 *
 *  function flush();
 * }
 *
 * interface HasUnitOfWorkInterface {
 *  function getUnitOfWork(name);
 * }
 *
 * interface EntityManagerInterface extends PersistsEntitiesInterface, HasUnitOfWorkInterface {
 *
 * }
 *
 * Quack Quack Quack 🦆 typing :D
 */

/**
 * @implements {EntityManagerInterface}
 */
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

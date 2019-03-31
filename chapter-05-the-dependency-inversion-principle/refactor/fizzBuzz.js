/**
 * In order to improve the understanding of this code, this file it is supposing to implement the following interface:
 *
 * interface RuleInterface {
 *  function matches(number);
 *  function getReplacement();
 * }
 *
 * Quack Quack Quack 🦆 typing :D
 */

function fizzBuzz() {
    const rules = [];

    /**
     * @param {RuleInterface} rule
     */
    function addRule(rule) {
        rules.push(rule);
    }

    function generateList(limit) {
        const list = [];

        for (let number = 1; number <= limit; number++) {
            list.push(generateElement(number));
        }

        return list;
    }

    function generateElement(number) {
        for (let ruleNumber = 0; ruleNumber < rules.length; ruleNumber++) {
            if (rules[ruleNumber].matches(number)) {
                return rules[ruleNumber].getReplacement();
            }
        }

        return number;
    }

    return {
        generateList,
        addRule,
    };
}

module.exports = fizzBuzz;

function fizzBuzz() {
    function generateList(limit) {
        const list = [];

        for (let number = 1; number <= limit; number++) {
            list.push(generateElement(number));
        }

        return list;
    }

    function generateElement(number) {
        const fizzBuzzRule = fizzBuzzRule();

        if (fizzBuzzRule.matches(number)) {
            return fizzBuzzRule.getReplacement();
        }

        if (fizzRule.matches(number)) {
            return fizzRule.getReplacement();
        }

        if (buzzRule.matches(number)) {
            return buzzRule.getReplacement();
        }

        return number;
    }

    return {
        generateList,
    };
}

module.exports = fizzBuzz;

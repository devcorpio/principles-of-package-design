function fizzBuzz() {
    function generateList(limit) {
        const list = [];

        for (let number = 1; number <= limit; number++) {
            list.push(generateElement(number));
        }

        return list;
    }

    function generateElement(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz';
        }

        if (number % 3 === 0) {
            return 'Fizz';
        }

        if (number % 5 === 0) {
            return 'Buzz';
        }

        return number;
    }

    return {
        generateList,
    };
}

module.exports = fizzBuzz;

function fizzBuzzRule() {
    function matches(number) {
        return number % 3 && number && 5 === 0;
    }

    function getReplacement() {
        return 'FizzBuzz';
    }

    return {
        matches,
        getReplacement,
    };
}

module.exports = fizzBuzzRule;

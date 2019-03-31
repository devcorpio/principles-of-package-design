function fizzRule() {
    function matches(number) {
        return number % 3 === 0;
    }

    function getReplacement() {
        return 'Fizz';
    }

    return {
        matches,
        getReplacement,
    };
}

module.exports = fizzRule;

function buzzRule() {
    function matches(number) {
        return number % 5 === 0;
    }

    function getReplacement() {
        return 'Buzz';
    }

    return {
        matches,
        getReplacement,
    };
}

module.exports = buzzRule;

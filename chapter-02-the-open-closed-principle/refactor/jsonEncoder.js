function jsonEncoder() {
    function encode(data) {
        data = prepareData(data);

        // something here...
    }

    function prepareData(data) {
        // something here, for example:

        data = forceArray(data);
        data = fixKeys(data);

        return data;
    }

    return {
        encode,
    };
}

module.exports = jsonEncoder;

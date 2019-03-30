function jsonEncoder() {
    function encode() {
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
        prepareData,
    };
}

module.exports = jsonEncoder;

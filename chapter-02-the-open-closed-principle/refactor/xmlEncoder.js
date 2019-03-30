function xmlEncoder() {
    function encode() {
        data = prepareData(data);

        // something here...
    }

    function prepareData(data) {
        // something here, for example:

        data = fixAttributes(data);

        return data;
    }

    return {
        encode,
    };
}

module.exports = xmlEncoder;

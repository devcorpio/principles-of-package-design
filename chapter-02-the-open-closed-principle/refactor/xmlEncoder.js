function xmlEncoder() {
    function encode() {
        // something here...
    }

    function prepareData(data) {
        // something here, for example:

        data = fixAttributes(data);

        return data;
    }

    return {
        encode,
        prepareData,
    };
}

module.exports = xmlEncoder;

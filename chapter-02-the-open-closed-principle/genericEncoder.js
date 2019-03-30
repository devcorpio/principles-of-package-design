function genericEncoder() {
    function encodeToFormat(data, format) {
        let encoder;
        if (format === 'json') {
            encoder = new JsonEncoder();
        } else if (format === 'xml') {
            encoder = new XmlEncoder();
        } else {
            throw new Error('Unknown format');
        }

        data = prepareData(data, format);

        return encoder.encode(data);
    }

    return {
        encodeToFormat,
    };
}

module.exports = genericEncoder;

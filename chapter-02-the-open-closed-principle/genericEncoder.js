function genericEncoder() {
    function encodeToFormat(data, format) {
        let encoder;
        if (format === 'json') {
            encoder = new JsonEncoder();
        } else if (format === 'xml') {
            encoder = new XmlEncoder();
        } else if (format === 'yml') {
            encoder = new YmlEncoder();
        } else {
            throw new Error('Unknown format');
        }

        data = prepareData(data, format);

        return encoder.encode(data);
    }

    function prepareData(data, format) {
        switch (format) {
            case 'json': {
                data = this.forceArray(data);
                data = this.fixKeys(data);
            }
            case 'xml': {
                data = this.fixAttributes(data);
                break;
            }
            default: {
                throw new Error('Format not supported');
            }
        }

        return data;
    }

    return {
        encodeToFormat,
    };
}

module.exports = genericEncoder;

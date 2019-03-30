function genericEncoder(encoderFactory) {
    function encodeToFormat(data, format) {
        const encoder = encoderFactory.createForFormat(format);

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

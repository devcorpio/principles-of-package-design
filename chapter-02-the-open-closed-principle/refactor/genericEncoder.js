function genericEncoder(encoderFactory) {
    function encodeToFormat(data, format) {
        const encoder = encoderFactory.createForFormat(format);

        return encoder.encode(data);
    }

    return {
        encodeToFormat,
    };
}

module.exports = genericEncoder;

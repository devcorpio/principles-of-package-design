function encoderFactory() {
    const factories = {};

    function createForFormat(format) {
        if (typeof factories[format] !== 'function') {
            throw new Error('Unknown format');
        }

        return factories[format];
    }

    function addEncoderFactory(format, fn) {
        factories[format] = fn;
    }

    return {
        createForFormat,
        addEncoderFactory,
    };
}

module.exports = encoderFactory;

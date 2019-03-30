const jsonEncoder = require('./jsonEncoder');
const xmlEncoder = require('./xmlEncoder');
const yamlEncoder = require('./yamlEncoder');

function encoderFactory() {
    function createForFormat(format) {
        if (format === 'json') {
            return jsonEncoder();
        } else if (format === 'xml') {
            return xmlEncoder();
        } else if (format === 'yml') {
            return yamlEncoder();
        }

        throw new Error('Unknown format');
    }

    return {
        createForFormat,
    };
}

module.exports = encoderFactory;

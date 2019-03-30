const encoderFactory = require('./encoderFactory');
const jsonEncoder = require('./jsonEncoder');

const encoderFactoryIstance = encoderFactory();

encoderFactoryIstance.addEncoderFactory('json', () => {
    return jsonEncoder();
});

encoderFactoryIstance.createForFormat('json');

//... xml, yaml...

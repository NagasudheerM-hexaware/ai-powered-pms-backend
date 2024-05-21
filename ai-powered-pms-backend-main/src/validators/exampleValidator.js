const generateValidatorFromModel = require('../utils/generateValidatorFromModel');
const ExampleModel = require('../models/exampleModel');

const exampleValidator = generateValidatorFromModel(ExampleModel);

module.exports = exampleValidator;
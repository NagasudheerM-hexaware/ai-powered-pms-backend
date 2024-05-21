// Importing the utility function to generate validators from models
const generateValidatorFromModel = require("../utils/generateValidatorFromModel");

// Importing the models for which validators need to be generated
const kraModel = require("../models/kraModel");
const profileModel = require("../models/profileModel");

// Exporting an object containing validators for each model
module.exports = {
  // Distribution List model validator
    kraValidator: generateValidatorFromModel(kraModel),
    profileValidator: generateValidatorFromModel(profileModel)
};

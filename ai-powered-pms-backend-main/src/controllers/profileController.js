const profileService = require('../services/profileService');
const messageBuilder = require("../utils/message_builder");
const queryCreator = require("../utils/queryCreator");

exports.getProfiles = async (req, res, next) => {
  try {
    var query = req.query ? req.query : undefined;
    const createdQuery = queryCreator(query);
    const result = await profileService.getProfiles(createdQuery);
    res.status(200).json(messageBuilder(result, false, "Profiles retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

exports.getProfileById = async (req, res, next) => {
  try {
    const result = await profileService.getProfileById(req.params.id);
    if (result) {
      res.status(200).json(messageBuilder(result, false, "Profile retrieved successfully"));
    } else {
      res.status(404).send('Profile not found');
    }
  } catch (error) {
    next(error);
  }
};

exports.createProfile = async (req, res, next) => {
  try {
    const result = await profileService.createProfile(req.body);
    res.status(201).json(messageBuilder(result, false, "Profile created successfully"));
  } catch (error) {
    next(error);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const result = await profileService.updateProfile(req.params.id, req.body);
    if (result) {
      res.status(200).json(messageBuilder(result, false, "Profile updated successfully"));
    } else {
      res.status(404).send('Profile not found');
    }
  } catch (error) {
    next(error);
  }
};




exports.deleteProfile = async (req, res, next) => {
  try {
    const result = await profileService.deleteProfile(req.params.id);
    if (result) {
      res.status(200).json(messageBuilder(result, false, "Profile deleted successfully"));
    } else {
      res.status(404).send('Profile not found');
    }
  } catch (error) {
    next(error);
  }
};
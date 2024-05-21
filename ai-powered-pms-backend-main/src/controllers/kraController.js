const kraService = require('../services/kraService');
const messageBuilder = require("../utils/message_builder");

exports.getKRAs = async (req, res, next) => {
  try {
    const result = await kraService.getKRAs();
    res.status(200).json(messageBuilder(result, false, "KRAs retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

exports.getKRAById = async (req, res, next) => {
  try {
    const result = await kraService.getKRAById(req.params.id);
    if (result) {
      res.status(200).json(messageBuilder(result, false, "KRA retrieved successfully"));
    } else {
      res.status(404).send('KRA not found');
    }
  } catch (error) {
    next(error);
  }
};

exports.createKRA = async (req, res, next) => {
    console.log('in controller')
  try {
    const result = await kraService.createKRA(req.body);
    res.status(201).json(messageBuilder(result, false, "KRA created successfully"));
  } catch (error) {
    next(error);
  }
};

exports.updateKRA = async (req, res, next) => {
  try {
    const result = await kraService.updateKRA(req.params.id, req.body);
    if (result) {
      res.status(200).json(messageBuilder(result, false, "KRA updated successfully") );
    } else {
      res.status(404).send('KRA not found');
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteKRA = async (req, res, next) => {
  try {
    const result = await kraService.deleteKRA(req.params.id);
    if (result) {
      res.status(200).json(messageBuilder(result, false, "KRA deleted successfully"));
    } else {
      res.status(404).send('KRA not found');
    }
  } catch (error) {
    next(error);
  }
};
const exampleService = require('../services/exampleService');

exports.getExamples = async (req, res, next) => {
  try {
    const result = await exampleService.getExamples();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getExampleById = async (req, res, next) => {
  try {
    const result = await exampleService.getExampleById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send('Example not found');
    }
  } catch (error) {
    next(error);
  }
};

exports.createExample = async (req, res, next) => {
  try {
    const result = await exampleService.createExample(req.body);
    // client.del('cache:/api/examples'); //For Cache update on POST
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateExample = async (req, res, next) => {
  try {
    const result = await exampleService.updateExample(req.params.id, req.body);
    if (result) {
      // client.del('cache:/api/examples'); //For Cache update on PUT or UPDATE
      res.status(200).json(result);
    } else {
      res.status(404).send('Example not found');
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteExample = async (req, res, next) => {
  try {
    const result = await exampleService.deleteExample(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send('Example not found');
    }
  } catch (error) {
    next(error);
  }
};

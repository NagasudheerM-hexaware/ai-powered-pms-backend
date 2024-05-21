const express = require('express');
const GenAIAPI = require('../services/genAIService')
const router = express.Router();

//GET Profile Image
router.post('/ask-ai' , GenAIAPI.getAIResponse);


//router.post('/ask' , GenAIAPI.getResponse);





module.exports = router;
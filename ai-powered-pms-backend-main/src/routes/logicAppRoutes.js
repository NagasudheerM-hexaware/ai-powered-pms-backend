const express = require('express');
const logicAppAPI = require('../services/logicAppService')
const router = express.Router();

//GET Profile Image
router.post('/getImage' , logicAppAPI.getProfileImage);

//GET Profile Information
router.post('/getProfileInfo' ,logicAppAPI.getProfileInfo);

//Pushing Invite
  router.post('/pushInvite' ,logicAppAPI.createInvites);


module.exports = router;
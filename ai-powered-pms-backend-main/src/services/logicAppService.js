const axios = require("axios");

const logger = require("../utils/logger");
//GET Profile Image
exports.getProfileImage = async (req, res, next) => {
  try {
    const requestBody = req.body;
    // Make the internal POST API call using axios
    const secondPostResponse = await axios.post(
      process.env.GET_IMAGE,
      requestBody,
      {
        responseType: "arraybuffer", // Request the response as an array buffer to handle binary data
      }
    );
    // Set the appropriate content type for the image
    res.setHeader("Content-Type", secondPostResponse.headers["content-type"]);
    // Send the image binary data in the response
    res.end(Buffer.from(secondPostResponse.data, "binary"));
  } catch (error) {
    logger.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//GET Profile Information
exports.getProfileInfo = async (req, res, next) => {
  try {
    const requestBody = req.body;
    // Make the internal POST API call using axios
    const secondPostResponse = await axios.post(
      process.env.GET_PROFILE_INFO,
      requestBody
    );
    // Return the response body of the second API call to the original requester
    res.json(secondPostResponse.data);
  } catch (error) {
    logger.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



//Pushing Invite
exports.createInvites = async (req, res, next) => {
  try {
    const requestBody = req.body;
    logger.info(requestBody);
    // requestBody.emailContent = commonEmailTemplate(
    //   // requestBody.startTime,
    //   // requestBody.endTime,
    //  // requestBody.category,
    //   requestBody.meetingsUrl,
      
    //   // requestBody.mode,
    // );

    // Make the internal POST API call using axios
    logger.info(`Invite Created for ${requestBody.category}`);
    const secondPostResponse = await axios.post(
      process.env.PUSH_INVITE,
      requestBody
    );
    res.json(secondPostResponse.data);
  } catch (error) {
    logger.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};






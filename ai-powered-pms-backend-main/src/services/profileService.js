const ProfileModel = require('../models/profileModel');

exports.getProfiles = async (query) => {
  const profileData = await ProfileModel.find(query);
  return profileData;
};

exports.getProfileById = async (id) => {
  const profile = await ProfileModel.findById(id);
  return profile;
};

exports.createProfile = async (data) => {
  const newProfile = new ProfileModel(data);
  const savedProfile = await newProfile.save();
  return savedProfile;
};

exports.updateProfile = async (id, data) => {
  const updatedProfile = await ProfileModel.findByIdAndUpdate(id, data, { new: true });
  return updatedProfile;
};


exports.deleteProfile = async (id) => {
  const deletedProfile = await ProfileModel.findByIdAndDelete(id);
  return deletedProfile;
};
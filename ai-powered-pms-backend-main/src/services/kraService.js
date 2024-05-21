const KRAModel = require('../models/kraModel');

exports.getKRAs = async () => {
  const kraData = await KRAModel.find();
  return kraData;
};

exports.getKRAById = async (id) => {
  const kra = await KRAModel.findById(id);
  return kra;
};

exports.createKRA = async (data) => {
    console.log('in service') ;
  const newKRA = new KRAModel(data);
  const savedKRA = await newKRA.save();
  return savedKRA;
};

exports.updateKRA = async (id, data) => {
  const updatedKRA = await KRAModel.findByIdAndUpdate(id, data, { new: true });
  return updatedKRA;
};

exports.deleteKRA = async (id) => {
  const deletedKRA = await KRAModel.findByIdAndDelete(id);
  return deletedKRA;
};
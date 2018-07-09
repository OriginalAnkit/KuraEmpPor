var mongoose = require("mongoose");
var empSchema = new mongoose.Schema({
   name:String,
   empId:String,
   empImg:String,
   department:String,
   gender:String
});

module.exports = mongoose.model("emp", empSchema);
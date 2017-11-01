const mongoose = require("mongoose");
var Schema = mongoose.Schema,



ServiceOrderSchema = new Schema({
cusFirstName     : String,
cusLastName     : String,
cusPhoneNumber  : String,
cusEmail     : String,
cusCarVin      : String,
cusCarMake      : String,
cusCarModel      : String,
cusCarYear      : String,
cusCarService      : String,
cusCarServiceTwo      : String,
cusCarServiceThree      : String,
cusAttendant: String,

});

 mongoose.model("ServiceOrder", ServiceOrderSchema);

// Export the model
module.exports =  mongoose.model("ServiceOrder", ServiceOrderSchema);
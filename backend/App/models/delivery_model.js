// Import dependencies on Mongoose
var mongoose = require('mongoose');

// Create the Rental post Schema
var DeliverySchema = new mongoose.Schema({

});

DeliverySchema.pre('save', function(next){
	var currentDate = new Date();

	this.posted_date = currentDate;
	next();
});

var Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = Delivery;


// ================================================================


const sampleDelivery = {

}

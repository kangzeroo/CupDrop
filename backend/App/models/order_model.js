// Import dependencies on Mongoose
var mongoose = require('mongoose');

// Create the order Schema
var OrderSchema = new mongoose.Schema({
	
});

OrderSchema.pre('save', function(next){
	var currentDate = new Date();

	this.created_at = currentDate;
	next();
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
OrderSchema.index({gps: '2dsphere'});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;


// ================================================================

const sampleOrder = {

}

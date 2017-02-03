// Import dependencies on Mongoose
var mongoose = require('mongoose');

// Create the Rental post Schema
var ReceiptSchema = new mongoose.Schema({
  
})

ReceiptSchema.pre('save', function(next){
	var currentDate = new Date();

	this.purchase_date = currentDate;
	next();
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
ReceiptSchema.index({gps: '2dsphere'});

var Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;


// ================================================================

const sampleReceipt = {

}

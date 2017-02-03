// Import dependencies on Mongoose
var mongoose = require('mongoose');

// Create the Rental post Schema
var ReceiptSchema = new mongoose.Schema({
  customer_id: String,
  customer_name: String,
  batch_id: String,
  deliverer_id: String,
  deliverer_name: String,
  trip_id: String,
  purchase_date: Date,
  price: Number,
  order_id: Number,
  gps: [Number]
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
  "meal_id": "58929c6b678f8c0534890bc4",
  "chef_id": "833719045",
  "chef_name": "Rosa Shim",
  "customer_id": "100002907057114",
  "customer_name": "Kangze Huang",
  "price": 5,
  "gps": [-80.5268, 43.4799]
}

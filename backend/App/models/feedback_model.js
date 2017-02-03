// Import dependencies on Mongoose
var mongoose = require('mongoose');

// Create the Rental post Schema
var FeedbackSchema = new mongoose.Schema({
	customer_id: String,
  customer_name: String,
  customer_pic: String,
	transaction_id: String,
  meal_id: String,
	meal_name: String,
	meal_pic: String,
	chef_id: String,
	chef_name: String,
	chef_pic: String,
	liked: Boolean,
	comment: String,
  posted_date: Date
});

FeedbackSchema.pre('save', function(next){
	var currentDate = new Date();

	this.posted_date = currentDate;
	next();
});

var Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;


// ================================================================


const sampleFeedback = {
	"customer_id": "100002907057114",
  "customer_name": "Kangze Huang",
  "customer_pic": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/c2.0.320.320/p320x320/15420994_1265018940271662_4935630355881730951_n.jpg?oh=07915eb0c22f897d22548efb7ce46fc7&oe=5911C87B",
	"transaction_id": "58929d1a15cba20564949e08",
  "meal_id": "00000000000",
	"meal_name": "Spagetti and Meatballs",
	"meal_pic": "https://cdn.instructables.com/FY0/BMNB/IB226AMH/FY0BMNBIB226AMH.MEDIUM.jpg",
	"chef_id": "833719045",
	"chef_name": "Rosa Shim",
	"chef_pic": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p320x320/15380590_10155527854494046_2920338336211259461_n.jpg?oh=1d52d14acc19064a46960f30ee420036&oe=590163FA",
	"liked": true,
	"comment": "Wow, tasted so good! Amazing dish, this girl is really wifey!"
}

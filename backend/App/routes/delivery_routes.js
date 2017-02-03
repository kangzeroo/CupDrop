
const Feedback = require('../models/Feedback_model');

// POST/ start_delivery
exports.start_delivery = function(req, res, next){
	console.log(".................. START DELIVERY ........................")
	console.log(req.body)
  
}

// POST/ get_feedback_meal
exports.update_delivery = function(req, res, next){
	console.log(".................. UPDATE DELIVERY ........................")
	console.log(req.body)

}

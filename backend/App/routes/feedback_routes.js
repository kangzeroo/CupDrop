
const Feedback = require('../models/Feedback_model');

// POST/ new_feedback
exports.new_feedback = function(req, res, next){
	console.log(".................. NEW FEEDBACK ........................")
	console.log(req.body)
  const newFeedback = req.body

  const feedback = new Feedback(newFeedback);
	feedback.save(function(err, feedback){
		if(err){
			console.log(err)
			next()
		}
		console.log("saving this new feedback: " + feedback._id);
		res.json(feedback)
	})
}

// POST/ get_feedback_meal
exports.get_feedback_meal = function(req, res, next){
	console.log(".................. GET MEAL FEEDBACK ........................")
	console.log(req.body)
  const meal_id = req.body.meal_id
  Feedback.find({meal_id: meal_id}, function(err, feedbacks){
  	if(err){
      console.log(err)
      next()
    };
  	// return the matching Leases
		console.log("found " + feedbacks.length + " feedbacks");
  	if(feedbacks.length > 0){
  		res.json(feedbacks);
  	}else{
  		res.json([]);
  	}
  })
}

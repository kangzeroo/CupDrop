
const Meal = require('../models/meal_model');

// POST/ new_meal
exports.new_meal = function(req, res, next){
	console.log(".................. NEW MEAL ........................")
	console.log(req.body)
  const newMeal = req.body

  const meal = new Meal(newMeal);
	meal.save(function(err, meal){
		if(err){
			console.log(err)
			next()
		}
		console.log("saving this new meal: " + meal.meal_name);
		res.json(meal)
	})
}


// POST/ nearby_meals
exports.nearby_meals = function(req, res, next){
	console.log(".................. NEARBY MEALS ........................")
	console.log(req.body)
  const query = {
    gps: [req.body.gps[1], req.body.gps[0]],
    radius: req.body.radius,
    since: req.body.since
  }
  Meal.find({$and: [{gps: {$near: query.gps, $maxDistance: query.radius}}, {cooked_at: {$gte: query.since}}]}, function(err, meals){
  	if(err){
      console.log(err)
      next()
    };
  	// return the matching Leases
		console.log("found " + meals.length + " meals");
  	if(meals.length > 0){
  		res.json(meals);
  	}else{
  		res.json([]);
  	}
  })
}

// POST/ toggle_soldout_meal
exports.toggle_soldout_meal = function(req, res, next){
	console.log(".................. TOGGLE MEAL AVAILABILITY ........................")
	console.log(req.body)

  const meal_id = req.body.meal_id

  Meal.findById(meal_id, function(err, meal){
    meal.available = !meal.available;
	  meal.save(function (err, updatedMeal) {
		  if (err){
		  	console.log(err)
		  	next()
		  }
			console.log("Successfully toggled meal " + updatedMeal.meal_name + " availability to: " + updatedMeal.available)
      res.json(updatedMeal);
	  })
  })
}

// POST/ get_meal
exports.get_meal = function(req, res, next){
	console.log(".................. GET MEAL ........................")
	console.log(req.body)
	const meal_id = req.body.meal_id

	const response = {
		meal: null,
		feedbacks: []
	}

	Meal.findById(meal_id, function(err, meal){
		response.meal = meal
		Feedback.find({meal_id: meal._id}, function(err, feedbacks){
	  	if(err){
	      console.log(err)
	      next()
	    };
	  	// return the matching Leases
			console.log("found " + feedbacks.length + " feedbacks");
			response.feedbacks = feedbacks
	  	if(feedbacks.length > 0){
	  		res.json(response);
	  	}else{
	  		res.json(response);
	  	}
	  })
  })
}

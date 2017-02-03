
const Authentication = require('./routes/auth_routes')
const Meal = require('./routes/meal_routes')
const Transaction = require('./routes/transaction_routes')
const Feedback = require('./routes/feedback_routes')

// use `requireAuth` or `requireSignin` to wrap routes with auth conditions
module.exports = function(app){

	// Auth related routes
	app.post('/longlivetoken', Authentication.longlivetoken)
	// Test auth
	app.post('/', Authentication.authtest)

	app.post('/new_meal', Meal.new_meal)
	app.post('/get_meal', Meal.get_meal)
	app.post('/nearby_meals', Meal.nearby_meals)
	app.post('/toggle_soldout_meal', Meal.toggle_soldout_meal)

	app.post('/new_transaction', Transaction.new_transaction)

	app.post('/new_feedback', Feedback.new_feedback)
	app.post('/get_feedback_meal', Feedback.get_feedback_meal)
}

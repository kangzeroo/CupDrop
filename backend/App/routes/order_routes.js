
const Order = require('../models/order_model');

// POST/ new_order
exports.new_order = function(req, res, next){
	console.log(".................. NEW ORDER ........................")
	console.log(req.body)
	res()
}

// POST/ get_order
exports.get_order = function(req, res, next){
	console.log(".................. GET ORDER ........................")
	console.log(req.body)
	res()
}


// POST/ nearby_orders
exports.nearby_orders = function(req, res, next){
	console.log(".................. NEARBY ORDERS ........................")
	console.log(req.body)
	res()
}

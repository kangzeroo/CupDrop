
const Authentication = require('./routes/auth_routes')
const Order = require('./routes/order_routes')
const Receipt = require('./routes/receipt_routes')
const Delivery = require('./routes/delivery_routes')

// use `requireAuth` or `requireSignin` to wrap routes with auth conditions
module.exports = function(app){

	// Auth related routes
	app.post('/longlivetoken', Authentication.longlivetoken)
	// Test auth
	app.post('/', Authentication.authtest)

	app.post('/new_order', Order.new_order)
	app.post('/get_order', Order.get_order)
	app.post('/nearby_orders', Order.nearby_orders)
	app.post('/complete_order', Order.complete_order)

	app.post('/new_receipt', Receipt.new_receipt)

	app.post('/start_delivery', Delivery.state_delivery)
	app.post('/update_delivery', Delivery.update_delivery)

}

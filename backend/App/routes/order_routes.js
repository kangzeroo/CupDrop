
const Order = require('../models/order_model');

// POST/ new_order
exports.new_order = function(req, res, next){
	console.log(".................. NEW ORDER ........................")
	console.log(req.body)
  const newOrder = req.body

  const order = new order(neworder);
	order.save(function(err, order){
		if(err){
			console.log(err)
			next()
		}
		console.log("saving this new order: " + order.order_name);
		res.json(order)
	})
}


// POST/ nearby_orders
exports.nearby_orders = function(req, res, next){
	console.log(".................. NEARBY ORDERS ........................")
	console.log(req.body)
  const query = {
    gps: [req.body.gps[1], req.body.gps[0]],
    radius: req.body.radius,
    since: req.body.since
  }
  Order.find({$and: [{gps: {$near: query.gps, $maxDistance: query.radius}}, {cooked_at: {$gte: query.since}}]}, function(err, orders){
  	if(err){
      console.log(err)
      next()
    };
  	// return the matching Leases
		console.log("found " + orders.length + " orders");
  	if(orders.length > 0){
  		res.json(orders);
  	}else{
  		res.json([]);
  	}
  })
}

// POST/ toggle_soldout_order
exports.complete_order = function(req, res, next){
	console.log(".................. COMPLETE ORDER ........................")
	console.log(req.body)

  const order_id = req.body.order_id

  Order.findById(order_id, function(err, order){
    order.available = !order.available;
	  order.save(function (err, updatedorder) {
		  if (err){
		  	console.log(err)
		  	next()
		  }
			console.log("Successfully toggled order " + updatedorder.order_name + " availability to: " + updatedorder.available)
      res.json(updatedorder);
	  })
  })
}

// POST/ get_order
exports.get_order = function(req, res, next){
	console.log(".................. GET order ........................")
	console.log(req.body)
	const order_id = req.body.order_id

	const response = {
		order: null,
		feedbacks: []
	}

	Order.findById(order_id, function(err, order){
		response.order = order
		Feedback.find({order_id: order._id}, function(err, feedbacks){
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

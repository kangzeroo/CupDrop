
const Transaction = require('../models/transaction_model');

// POST/ new_receipt
exports.new_receipt = function(req, res, next){
	console.log(".................. NEW RECEIPT ........................")
	console.log(req.body)
}


const Transaction = require('../models/transaction_model');

// POST/ new_transaction
exports.new_transaction = function(req, res, next){
	console.log(".................. NEW TRANSACTION ........................")
	console.log(req.body)
  const newTransaction = req.body

  const transaction = new Transaction(newTransaction);
	transaction.save(function(err, transaction){
		if(err){
			console.log(err)
			next()
		}
		console.log("saving this new transaction: " + transaction._id);
		res.json(transaction)
	})
}

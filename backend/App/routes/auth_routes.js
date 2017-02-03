
const axios = require('axios')


// GET /
exports.authtest = function(req, res, next){
	res.send({message:'Super secret code is ABC123'});
}

exports.longlivetoken = function(req, res, next){
	const fbAccessToken = req.body.accessToken
	console.log(fbAccessToken)
	axios.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${"123200274860871"}&client_secret=${"ba9069d1089f2d028c006125a8a76855"}&fb_exchange_token=${fbAccessToken}` )
		.then((data)=>{
			console.log("================================ FB TOKEN ALL ================================")
			console.log(data)
			console.log("================================ FB TOKEN START ================================")
			let longLiveToken = data.data.slice(13) 	// remove the 'access_token=' from beggining
			let positionEnd = longLiveToken.indexOf('&expires=')
			longLiveToken = longLiveToken.slice(0, positionEnd)
			console.log(longLiveToken)
			console.log("================================ FB TOKEN END ================================")
			res.json({
				message: "Success getting the long lived fb token!",
				longLiveToken: longLiveToken
			})
		})
		.catch((err)=>{
			console.log(err)
			res.json({
				message: "Failure getting the long lived fb token!"
			})
		})
}

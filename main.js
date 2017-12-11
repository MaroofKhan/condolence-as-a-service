'use strict'

const Express = require("express")
const BodyParser = require("body-parser")
const CORS = require("cors")

const PORT = process.env.PORT || 3001

const application = Express()
application.use(BodyParser.json())
application.use(BodyParser.urlencoded({ extended: false }))
application.use(CORS())

application.get("/condole/:about/:whom/:from", function(req, res) {
	const about = req.params.about
	const whom = req.params.whom
	const from = req.params.from
	const responses = [
		"I extend my deepest sympathies to you " + whom + ". May your " + about + " be at peace with our Heavenly Father.",
		"Please accept my condolences, just know that I am here for you " + whom + ", please don’t hesitate to reach out, especially during this difficult time.",
		"I am truly sorry to hear of your loss " + whom + ". Please accept our condolences and may our prayers help comfort you.",
		"Whatever happens, happens for good " + whom + "! I'm sure God had better plans for your " + about + ".",
		"Every cloud has a silver lining, therefore, every " + about + " trouble will eventually be reolved. Stay strong " + whom + "!"
	]
	const random = Math.floor(Math.random() * responses.length)
	const condolence = responses[random]
	const html = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n <body>\n      <h1>"+ condolence +"</h1><br\><p>- from your friend, " + from  + ".</p>\n </body>\n</html>"
	res.send(html)
})

const server = require("http").createServer(application)
server.listen(PORT, function() {
	console.log("Up and running @ localhost: " + PORT);
})


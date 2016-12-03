module.exports = (robot) ->

robot.hear /hi/i, (res) ->
	res.send "Howdy"
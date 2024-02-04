const fs = require('fs');
const path = require('path')

const test = "This is a test! \n"

const RIMAC_PATH = path.join(__dirname, "rimac.csv")
const GEISEL_PATH = path.join(__dirname, "geisel.csv")

console.log(RIMAC_PATH)

fetch('https://waitz.io/live/ucsd')
	.then(req => req.json())
	.then(({data}) => {
		

		const TIMESTAMP = new Date().toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles',
});
		//const TIMESTAMP = new Date().toISOString().replace('T', ' ').substr(0, 19)
		const RIMAC_DATA = data.find(place => place.name === "RIMAC Fitness Gym")
		

		if(!RIMAC_DATA.isOpen){
			console.log("RIMAC is not open!")
			return
		}


		let percentage = ""

		if(RIMAC_DATA.percentage === 1){
			percentage = "100%"
		} else {
			percentage = RIMAC_DATA.percentage
			percentage = percentage.toString()
			percentage = percentage.replace("0.", "%")
		}
		
		CSV_WRITE = TIMESTAMP + "," + percentage + "\n"

		fs.appendFile(RIMAC_PATH, CSV_WRITE, err => {
			if(err){
				console.log(err)
			}
		}
		)
		
		console.log("Successfully wrote to file!")


		}
		)

	


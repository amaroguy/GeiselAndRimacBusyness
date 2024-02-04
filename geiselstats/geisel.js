const fs = require('fs')
const path = require('path')

fetch("https://waitz.io/live/ucsd")
	.then(res => res.json())
	.then(({data}) => {
		
		const GEISEL = data.find(area => area.name === "Geisel Library")
		const TIMESTAMP = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', });

	
		if(!GEISEL.isOpen){
			return
		}


		//name and percentage
		const subLocInfo = GEISEL.subLocs.map(subLoc => {
			return {
				name: subLoc.name,
				percentage: subLoc.percentage
			}
		})

		subLocInfo.forEach(floor => {
			
			let FILENAME = floor.name.replaceAll(" ", "_") + ".csv"
			let FILEPATH = path.join(__dirname, FILENAME)

			let FILEWRITE = TIMESTAMP + "," + floor.percentage + "\n"


			fs.appendFile(FILEPATH, FILEWRITE, (error) => {
					if(error){
						console.log(error)
					}
				})

			console.log("Wrote", floor.percentage, "to file", FILENAME )
	
		})


		console.log(subLocInfo)
	})

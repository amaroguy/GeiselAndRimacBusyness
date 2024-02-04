This repo uses the waitz api to track how busy each for of Geisel Library has been since Mid-October of 2022. Its also been tracking the RIMAC gym as well. Eventually I might do some EDA with it.

The data is collected at 30 minute intervals by a cronjob running every 30 minutes that runs the scripts

./rimac.js
./geiselstats/geisel.js

it just harvests data from

https://waitz.io/api/ucsd


I dont see why I would stop collecting this data, so I might update it yearly if it doesn't break along the way since the Waitz API has changed
the name of RIMAC in the API response once before, shouldnt be a problem with Geisel however since I'm just iterating over the sublocations (each floor) and writing it
to a file with the sublocation as the filename.

LAST UPDATED: 2/2/2024

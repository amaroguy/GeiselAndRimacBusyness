export function getTimeStampPST() {
	return new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', });

}

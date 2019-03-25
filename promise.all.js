function getData() {
	fetch(url, { method: ‘GET’, cache: ‘no-cache’, headers: { Content-Type: ‘application/json’}}).then(
	response => response.json())
}
async function getAllUsers(){
	try {
		let promises = [1,2,3].map((e) => return getData(e))
		let users = await Promise.all(promises)
	} catch(e){
		console.log(e)
	}
}
getAllUsers()

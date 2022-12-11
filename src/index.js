const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile("File.txt", "Hello");
}

const myFileReader = async (fileName) => {
	await fs.readFile("File.txt",{encoding:"utf-8"},(err,data)=>{
		if(err){
		console.log(err)}
		else{
			console.log(data);
		}
	})
}

const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile("File.txt","World");
}

const myFileDeleter = async (fileName) => {
	await fs.unlink("File.txt");
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
//accessing directly
const {readFileSync,writeFileSync, read} = require('fs')

//same as above 
/*

const fs = require('fs')
fs.readFileSync
 
*/
console.log('start')

//this will read file
const text1 = readFileSync('./content/first.text','utf-8')
console.log('text 1 :' + text1)

const text2 = readFileSync('./content/second.text','utf-8')
console.log(text2)

//this will write first file text into second file 
writeFileSync('./content/second.text',text1) //this will overwrite file content with text you passed
writeFileSync('./content/second.text',text2,{flag : 'a'}) // this will append text to file and not overwrite


//now read second text file
const text3 = readFileSync('./content/second.text','utf-8')
console.log(text3)

console.log('done with task')
console.log('Starting next task')
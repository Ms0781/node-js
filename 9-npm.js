// npm stands for node package manager
// npm - global command comes with Node
// check version of npm : npm --version

// there are multiple two types of dependency :


// - local which is used in only particular project.
// npm i <packagename>

// - global which can used in any project
// npm install -g <packagename> for windows
// sudo install -g <packagename> for mac


// // package.json file which works manifest file which stores important information about our project or package
// there are multiple ways of creating package.json file 
// 1)  Manual Approach : create package.json in root project and addd properties
// 2) npm init (step by step answer and create.)
// 3) npm init -y  (everything default)

//using loadash dependancy 

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
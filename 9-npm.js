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

//Why package.json is important
/* package.json store information about dependencies 
intsall into projects. all the dependancy store into node_modules
which will take to much space
avoiding that we will not push node_module into Git and we will share code with other developer
so whenever other developers clone this projects then they just need to run "npm install" which will download
all required node modules and create node_modules folder.
*/


/* dev dependencies 

dependencies which used only for project development and testing but not used into production.
we will install that dependencies as dev dependencies.

 to install dependencies as a devdependencies :
  
   npm i <package name> -D/--save-dev

*/


/* 
 How is script works in package.json 

 script is used to defined User defined command in project to use shorten format of command

 ex: we run file using node <FileName>.js

 if we set command in script :
    "start" : "node 1-Global.js"

    then we don't need to run node 1-Global.js every time instead of that we can do is npm start.

*/

/*
 
    Unintstall depenencies 

    two approach :

    1) npm uninstall <packagename>
    2) Manual Approach :

        - Remove package-lock.json 
        - remove dependencies from package.json
        - run npm install
 */

        
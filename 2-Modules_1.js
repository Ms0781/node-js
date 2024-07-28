//modules 

/*
 -> every file by default is module
*/

//local 
const john = 'John'

//share
const peter = 'Peter'
const susan = 'susan'

/*
    console.log(module)

    print module informations.

    result : 

    {
  id: '.',
  path: 'E:\\node_projects',
  exports: {},
  filename: 'E:\\node_projects\\2-Modules_1.js',
  loaded: false,
  children: [],
  paths: [ 'E:\\node_projects\\node_modules', 'E:\\node_modules' ]
}

    exports is an object which contain those things which you want to access anywhere in the app.

*/


module.exports = {john,peter} //syntax 1
module.exports.cat = "Cat" // syntax 2
module.exports.items = ['item1','item2'] 

// this will enable john and peter to access anywhere in app

console.log(module)

/*
{
  id: '.',
  path: 'E:\\node_projects',
  exports: { john: 'John', peter: 'Peter' },
  filename: 'E:\\node_projects\\2-Modules_1.js',
  loaded: false,
  children: [],
  paths: [ 'E:\\node_projects\\node_modules', 'E:\\node_modules' ]
}

*/
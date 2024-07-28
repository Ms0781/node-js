const os = require('os')

//this will give info about user
const user = os.userInfo();
console.log(user)


//this will give info about system uptime 
console.log(os.uptime())

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOS)
const os = require('os')

const user = os.userInfo()

//info about user
console.log(user)

//method returns uptime of a system
console.log(`The system uptime is : ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime()
}

console.log(currentOs)
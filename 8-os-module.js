const os = require("os");

// info about current username
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`the System Uptime is ${os.uptime()} Seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log("type: " + currentOS.name);
console.log("release: " + currentOS.release);
console.log("total: " + currentOS.totalMem);
console.log("free: " + currentOS.freeMem);

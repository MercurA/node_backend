const IoC = require('electrolyte');

// we dictate that './' is the root
IoC.use(IoC.dir('./'))

// once the root is fixed we can just tell the path to the folder here
// what it does is creating a container that will be ready to be initialized
let http = IoC.create('server/http');
// the only function returned is start()
// once we type npm run dev te fn bellow with activate express to listen to 
// incoming request at the desired host and port
http.start();
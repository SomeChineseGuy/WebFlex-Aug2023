const http = require('http');
const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log('Someone Has connected');
  console.log(request.url);
  if(request.url === "/") {
    response.end('<h1>Welcome to my site </h1>')
  } else if(request.url === "/somethingelse") {
    response.end('<h1>Something Else</h1>')
  }
});

server.listen(PORT, () => {
  console.log('Server is on now');
})
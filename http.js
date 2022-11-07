const http = require("http");

const PORT = 3002;
const HOSTNAME = "127.0.0.1";

http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.write("Welcome to the  Server");
      return response.end();
    }
    if (request.url === "/about") {
      response.write("Welcome, About");
      return response.end();
    }

    response.write("Not Fount - 404");
    response.end();
  })
  .listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
  });

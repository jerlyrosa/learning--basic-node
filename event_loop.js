const http = require("http");

const PORT = 3002;
const HOSTNAME = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    response.write("Welcome to the  Server");
    return response.end();
  }
  if (req.url === "/about") {
    //bloking code
    for (let index = 0; index < 1000; index++) {
      console.log(Math.random() * i);
    }
    response.write("About");
    return response.end();
  }

  res.write("Not Fount - 404");
  res.end();
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});

const http = require("http");
const { createReadStream } = require("fs");

const PORT = 3002;
const HOSTNAME = "127.0.0.1";

const server = http.createServer((req, res) => {
  const stream = createReadStream("./data/bigfile.txt", "utf-8");

  stream.on("data", (chunk) => {
    stream.pipe(res);
  });

  stream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});

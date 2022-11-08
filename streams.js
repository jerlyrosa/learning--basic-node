const { writeFile } = require("fs/promises");
const { createReadStream } = require("fs");

const createBigFile = async () => {
  await writeFile("./data/bigfile.txt", "Hello World".repeat(10000));
};

// createBigFile();

const stream = createReadStream("./data/bigfile.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Termine");
});

stream.on("error", (error) => {
  console.log(error);
});

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data) => {
  console.log(data);
});

customEmitter.emit("response", "Hello");
customEmitter.emit("response", "jerly");
customEmitter.emit("response", [1, 5]);

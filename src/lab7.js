/**
 Todo: follow the todos in file to complete the lab
 - 
 */

const EventEmitter = require("events");

// Todo use EventEmitter
const ee = new EventEmitter();

// Todo: write listener 1 that logs the following, `data` and `token` are emitted
ee.on("room1", (data, token, arg3) => {
  console.log(
    `Recieved payload ${JSON.stringify(
      data,
      null,
      2
    )} with token: ${token} arg3: ${arg3}`
  );
});

// Todo: write listener 2 that logs the following
ee.on("room2", ({ data, token }) => {
  console.log("A second listener as well");
});

setInterval(() => {
  // Todo: write an emitter based listener 1
  ee.emit(
    "room1",
    Math.random(),
    String(Math.random()).substring(2),
    Math.random()
  );
}, 2000);
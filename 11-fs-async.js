const { readFile, writeFile } = require("fs");
console.log('start');
// function #1
readFile("./content/first.txt", "utf8", (err, result) => {
  // read file #1

  if (err) {
    console.log(err);
    return;
  }

  // else
  const first = result; // first
  // else
  //function #2
  readFile("./content/second.txt", "utf8", (err, result) => {
    //read file #2

    if (err) {
      console.log(err);
      return;
    }

    //else
    const second = result; // second
    //else

    //function #3
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  }); // read file #2
}); //read file #1
console.log("starting next task");

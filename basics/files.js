const fs = require("fs");

// Read the contents of the file 'data.txt' synchronously

fs.readFile("readfile.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

// Write data to 'output.txt' synchronously

fs.writeFile("output.txt", "This is some write test.", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully.");
});

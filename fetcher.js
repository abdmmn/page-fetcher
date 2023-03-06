const request = require("request");
const fs = require("fs");


const URL = process.argv[2];
const Filepath = process.argv[3];


request(URL, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }

  
  fs.writeFile(`${Filepath}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${Filepath}`);
    }
  });
});
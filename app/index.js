const http = require("http");

const httpServer = http.createServer(function (req, res) {
  console.log(req.headers);

  // set the header with key:value pair
  res.setHeader("Content-Type", "application/json");
  // write the status code oin the head
  res.writeHead(200);
  // JSON.stringify the data
  res.end(JSON.stringify(req.headers));
});

httpServer.listen(4000, function () {
  console.log("Server up and running on port 4000");
});

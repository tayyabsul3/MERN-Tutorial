const fs = require("fs");
const express = require("express");

const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const product = data.products;

const server = express();


//BODY PARSER MIDDLEWARE
server.use(express.json());

//URL ENCODED MIDDLEWARE
// server.use(express.urlencoded());


// GLOBAL MIDDLEWARE

// server.use((req, res, next) => {
//   if (req.query.password == "123") {
//     next();
//   } else {
//     res.send("unauthorized");
//   }
// });

//ROUTE LEVEL MIDDLEWARE
server.post(
  "/",
  (req, res, next) => {
    if (req.body.password == "123") {
      next();
    } else {
      res.send("unauthorized");
    }
  },
  (req, res) => {
    res.json({ type: "POST" });
  }
);

//API's - EndPoint - Routes

server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(3210, () => {
  console.log("Server running at 3210");
});

# MERN-Tutorial
 <h1>Chapter # 1 => Modules in Node.js</h1>

<p><strong>Note:</strong> Ensure that all tasks in Node.js are performed asynchronously.</p>

<h2>ES6 Modules:</h2>

<h3>Description:</h3>
<p>In this example, we have a function named <code>sum</code> in the <code>app.js</code> module that calculates the sum of two numbers. We demonstrate how to use this function in another file, <code>index.js</code>, by importing it using ES6 module syntax.</p>

<h3>Code Example:</h3>

<h4>app.js</h4>
<pre><code>export const sum = (a, b) => {
  return a + b;
};
</code></pre>

<h4>index.js</h4>
<pre><code>import { sum } from "./app.js";

console.log(sum(1, 2)); // Output: 3
</code></pre>

<h3>Using ES Modules:</h3>
<p>To use ES Modules, ensure your <code>package.json</code> file has <code>"type": "module"</code>. Then, modify your code as shown above.</p>
<hr>
<h1>File Systems in Node.js</h1>

<p>In Node.js, the File System (FS) module is built-in and helps in reading or writing files.</p>

<h2>Using CommonJS Syntax:</h2>
<p>To use the FS module, we can use CommonJS syntax:</p>

<pre><code>const fs = require("fs");
</code></pre>

<h2>Reading a File:</h2>
<p>We can read a file synchronously or asynchronously:</p>

<h3>Synchronous Method:</h3>
<pre><code>const data = fs.readFileSync(name, format);
</code></pre>
<p>Synchronous method takes approximately 69 milliseconds.</p>

<h3>Asynchronous Method:</h3>
<pre><code>fs.readFile(name, format, (err, response) => {
  // Callback function
});
</code></pre>
<p>Asynchronous method takes approximately 7 milliseconds.</p>

<p><strong>Note:</strong> Terminal path changing commands can be replicated using Node.js.</p>

<hr>
</html>
 <h1>Chapter # 2 => WEB SERVER USING HTTP</h1>

## WEB SERVERS

In the client-server architecture, clients request data from servers, and servers respond with the requested information. Let's delve into how these two entities communicate with each other:

### FIRStLY:

Firstly, take a look at the notes in the folder to understand what goes into a packet when a request and response are made.

### SECONDLY:

Open a browser and type `google.com`, then observe the network traffic from the browser's inspect tool.

### LASTLY:

Complete the assignments.

HTTP is a module that helps create a server.

<pre><code>// index.js

const http = require("http");
http.createServer((req, res) => {
  console.log("Server running");
  res.end("ok");
}).listen(1231);

</code></pre>


<p>We can also send complete files, but first, we have to read them using fs. When setting req.url, which is the URL for searching in a Chrome tab, we can determine which file to serve, whether it's HTML or an application/json file.

For example, if we have an array of 30 products, each with a unique ID, we can use that ID to view each product's data dynamically on the webpage. To do this:</p>
<pre><code>
 // index.js
const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

http.createServer((req, res) => {
  console.log("Server running");
  if (req.url.startsWith("/products/")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    res.setHeader("Content-Type", "text/html");
    res.end(product.title);
    return;
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/products":
      res.setHeader("Content-Type", "text/html");
      res.end(products.title);
      break;
    default:
      break;
  }
}).listen(1231);
</code></pre>


</code>


     <h1>Chapter # 3 => EXPRESS JS Crash Course</h1>

    <h2>EXPRESS JS:</h2>

    <p><strong>How to Create a Basic Server in Express:</strong></p>

    <pre><code>const express = require('express');
const server = express();

server.listen(3210, () => {
    console.log("Server is running");
});</code></pre>

    <p><strong>METHODS:</strong></p>

    <p>We can use get and post and every other method on a single path in express easily using built-in functions.</p>

    <p><strong>How can We create simple APIs/endpoints/routes:</strong></p>

    <pre><code>server.get("/", (req, res) => {
    res.send({ "type": "GET" });
});</code></pre>

    <p><strong>MIDDLEWARE: How Can we use Middleware and What is Its Purpose:</strong></p>

    <p><strong>Global Middleware:</strong></p>

    <pre><code>server.use((req, res, next) => {
    if (req.query.password == "123") {
        next();
    } else {
        res.send("unauthorized");
    }
});</code></pre>

    <p><strong>Router-level Middleware:</strong></p>

    <pre><code>server.post("/", (req, res, next) => {
    if (req.query.password == "123") {
        next();
    } else {
        res.send("unauthorized");
    }
}, (req, res) => {
    res.json({ type: "POST" });
});</code></pre>

    <p><strong>Three Ways to Get Data From:</strong></p>

    <ol>
        <li>Req.body: in this method we have to use a parser and pass some data in the body.</li>
        <li>Req.params: /:id it is of this type and we can access it using req.params.</li>
        <li>Req.query: ?password=123 it is of this type in the URL and to access it we use req.query.</li>
    </ol>

    <p><strong>Built-in Middleware:</strong></p>

    <pre><code>server.use(express.json());
server.use(express.urlencoded());</code></pre>

    <p><strong>Static Middleware:</strong></p>

    <pre><code>server.use(express.static("public"));</code></pre>

    <p><strong>Third-Party Middleware:</strong></p>

    <p>Use Morgan if you want to log details of the webpage on the server.</p>

    <p><strong>Conclusion:</strong></p>

    <p>Middleware sits in the middle of the request where we can either manipulate the request, accept it, or deny it. Basically, it gives us control over the request so that we can use it to make our applications more secure and optimized.</p>






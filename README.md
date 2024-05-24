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



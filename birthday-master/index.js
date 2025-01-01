import http from 'http';
4
​
5
// Create a server object
6
const server = http.createServer((req, res) =&gt; {
7
    // Set the response header
8
    res.writeHead(200, {'Content-Type': 'text/plain'});
9
    // Write some text to the response
10
    res.end('Welcome to my simple Node.js app!');
11
});
12
​
13
// Define the port to listen on
14
const port = 3000;
15
​
16
// Start the server
17
server.listen(port, () =&gt; {
18
    console.log(`Server is running on http://localhost:${port}`);
19
});

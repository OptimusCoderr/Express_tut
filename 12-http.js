const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return; // Exit after sending the response
    }
    else if (req.url === '/about') {
        res.end('Welcome to our about page');
        return; // Exit after sending the response
    }

    // This will be executed only if the URL does not match the above conditions
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page</p>
        <a href='/'>Back Home</a>
    `);
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
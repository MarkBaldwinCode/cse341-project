const { name } = require('ejs');
const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    let userNames =  
    [   "Bugs Bunny",
        "Daffy Duck",
        "Elmer Fud",
        "Sylvester",
        "Road Runner",
        "Yosemite Sam",
        "Foghorn Leghorn",
        "Marvin the Martian" 
    ]

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Week 1 Prove</title></head>');
        res.write('<body><h1>Hello CSE 341 week 1!</h1></body>');
        res.write('<h2>Enter User Name</h2>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Submit Username</button></form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        return res.end();
    }

    if (url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users List</title></head>');
        res.write('<body><h1>Users List</h1><ol>');
        console.log(userNames);
        for(const name of userNames){
            res.write(`<li>${name}</li>`);
        }
        res.write('</ol>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        return res.end();
    }

    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            let newUsername = parseBody.split('=')[1];
            console.log(newUsername);
            userNames.push(newUsername);
            console.log(userNames);
            res.write('<html>');
            res.write('<head><title>Users List</title></head>');
            res.write('<body><h1>New User Is:</h1>');
            res.write(`<li>${newUsername}</li>`);
            res.write('</body>');
            res.write('</html>');
            res.end();
            return res.end();       
        });
    };
};

module.exports = {
    handler: requestHandler
};
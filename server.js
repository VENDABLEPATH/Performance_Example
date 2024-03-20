const express = require('express');

const app = express();

function delay(duration){
    const start = Date.now();

    while(Date.now() - start < duration){
        // nothing
    };
};

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
   delay(5000);
   res.send(`Ding ding ding: ${process.pid}`);
});

console.log('Server.js is running.');
app.listen(3000);


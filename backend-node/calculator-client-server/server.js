//after making folder we do in it, npm init that makes folder package.json and do npm install express to get node modules
//here we are trying to connect node with html document.
//if we say this folder is static, express can access this document
const express = require('express')

const app = express() 

app.use(express.static(__dirname + '/html'))

app.get('/calc/:op', (req, res) => {
    let result = 0
    let op = req.params.op
    console.log(req.query) //just to see, although it prints in the terminal itself.
    console.log(req.params)

    const var1 = parseInt(req.query.var1)
    const var2 = parseInt(req.query.var2)
    
    switch(op) {
        case 'add' : result = var1 + var2; break;
        case 'sub' : result = var1 - var2; break;
        case 'mul' : result = var1 * var2; break;
        case 'div' : result = var1 / var2; break;
    }

    res.send(`
    <html>
    <body>
        <h1>Result = ${result}</h1>
    </body>
    </html>
    `)
})

app.listen(4432, () => {
    console.log('server started on http://localhostt:4432')
})
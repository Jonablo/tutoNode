const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World [Node.js, awsEc2 and Docker]')
})

app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
});
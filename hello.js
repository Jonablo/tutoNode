const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Mundo [Node.js, AwsEc2 and Dockers 19:40pm]')
})

app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
});
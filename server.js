const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'));



mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://mmadinag:Ad9kHvFJHNViLsEI@cluster0.ynsttpd.mongodb.net/?retryWrites=true&w=majority');

const messageSchema = {
    name: String,
    email: String,
    message: String,
    birth: String
}

const Message =mongoose.model('MyMessages', messageSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        birth: req.body.birth
    })
    newMessage.save()
    res.sendFile(__dirname + '/answer.html')
})

app.listen (3000, () => {
    console.log('Port 3000 is working')
})

const express = require('express');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 1010;
var fs = require('fs');            //required to readfile
const path = require('path');

const app = express();
const User = require('./model/user')
app.listen(port,()=>{
    console.log("server is running on port " + port)
});

mongoose.connect('mongodb+srv://devajitgupta:9455858543@cluster0.rpmmn5h.mongodb.net/instagram-data?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("database connected successfully")

},
error=>{
    console.log("database error: " + error)
}
);




app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/images', express.static('images'));

app.use(express.static(path.join(__dirname,'index.html')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));

});

// ...

app.post("/", async (request, response) => {
    const user = new User(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }

    console.log(user)
  });
  

/*
app.route('/').post((req,res,next)=>{
    User.create(req.body,(error,data)=>{
        
        if(error){
            return next (error)
        }else{
            res.json(data);
            console.log(data)
        }
    });

});
*/
app.get('/images/apple-store-button.png', function (req, res) {
    res.sendFile(path.join(__dirname, './images/apple-store-button.png'))
});
app.get('/images/feed-instagram.png', function (req, res) {
    res.sendFile(path.join(__dirname, './images/feed-instagram.png'))
});

app.get('/images/google-play-button.png', function (req, res) {
    res.sendFile(path.join(__dirname, './images/google-play-button.png'))
});

app.get('/images/instagram-celular.png', function (req, res) {
    res.sendFile(path.join(__dirname, './images/instagram-celular.png'))
});

app.get('/images/instagram-favicon.png', function (req, res) {
    res.sendFile(path.join(__dirname, './images/instagram-favicon.png'))
});

app.get('/images/instagram-logo.png', function (req, res) {
    res.sendFile(path.join(__dirname, './images/instagram-logo.png'))
});


// section 1
const express = require("express");
const axios = require('axios');
const path = require("path");
const port = process.env.PORT || 3000;


//section 2
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
//section 3
app.get("/", function(req, res){
res.send("<h1>Home Page</h1>")
});

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
     .then(response => {
       res.send(response.data);
     });
   });


//sectio 4
app.listen(3000, function(){
    console.log("Server is listening on port "+port);
})
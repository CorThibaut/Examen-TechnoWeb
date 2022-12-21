let express = require('express');


let app = express();


app.use(express.urlencoded({extended:true}));
let routes = require('./mesroutes');
app.use('/',routes);

app.use(express.static('public'));

app.listen(80, function(){
    console.log('running on port 80');
});
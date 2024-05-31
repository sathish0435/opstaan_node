const express = require('express');
const exphbs = require('express3-handlebars');
var path = require('path');
var badyparser = require('body-parser');
var indexrouter = require('./route/router')
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('views engine','hbs');
app.engine('hbs',exphbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine','hbs');
app.use(badyparser.urlencoded({extended:false}))
app.use(badyparser.json());
app.use('/',indexrouter);





app.listen(3500,()=>{
    console.log('running at 3500')
});
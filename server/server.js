var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql2');
var connection = require('./lib/db');

var appRouter = require('./routes/flower')

var app = express();

var corsOpt = {
    origin:"http://localhost:9001"
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json({ type: 'application/*+json' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //false originally

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to Flowerstore Exam" });
// });

app.use('/', appRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

//Get Modules

var express = require('express');
var routes = require('./routes');

var multer = require('multer');

var app = express();
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

//var urls = require('url');
//var mongoose = require('mongoose');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// urls = "/portfolio/home.html";
/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
    name : String,
    password : String
});

mongoose.model('dataset',User);
mongoose.connect('mongodb://localhost:27017/signupDB');
 */
 
/*
var mysql = require('mysql');
var fs = require('fs');
var PDFDocument = require('pdfkit');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var crypto = require('crypto');
var formidable = require('formidable');

var MongoClient = require('mongodb').MongoClient;
var mongo_url = 'mongodb://localhost:27017/';

//var prompt = require('prompt');
*/
app.set('port', process.env.PORT || 3000);
//app.set('port', process.env.PORT);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');


app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));

// app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname ,'public')));
//app.use(express.static(path.join(__dirname, 'another')));


/*******************

PORTAL HOME PAGE

*******************/

//POST Submit

// app.post('/submit',function(req,res){

// 	var user_given_name = req.body.nana;
// 	var user_given_pass = req.body.qwe;
	
// 	//console.log(req);
// 	console.log('---------------------------');
// 	console.log(req.body);
// 	console.log('---------------------------');
// 	console.log(user_given_name);
// 	console.log('---------------------------');
// 	console.log(user_given_pass);
// 	console.log('---------------------------');
	
// 	//res.send(200);
// 	//res.sendStatus(status);
	
// 	//{ $cond: { user_given_name == 'shakthi' && user_given_pass == '1234', res.redirect('C:/Users/NaRaYeN/Desktop/fouren tech/test/public/portfolio/home.html') , console.log('----------------incorrect-------------') } }
	
// 	//res.end();
	
// });


// /*
app.post('/signup', function(req, res){
	
	var user_given_name = req.body.nana;
	var user_given_pass = req.body.qwe;
	var newArr = [];
	
	var MongoClient = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017/';

	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },function(err, db) {
		if (err) throw err;
		
		var dbo = db.db("signupDB");
		dbo.collection("dataset").find({}).toArray(function(errRES, result1) {
			if (errRES) throw errRES;

			console.log(result1);

			if (result1[0].name == user_given_name && result1[0].password == user_given_pass) {
				newArr.push("ok");
			} else {
				newArr.push("Not ok");
			}
			res.send(newArr);
		});
	});
});

// 		}, function(err, result) {
// 				if (err) {
// 					//throw err;
// 					//alert ("incorrect data");
// 					console.log("incorrect data");
// 				}
// 				else {
// 					res.urls = "portfolio/home.html";
// 					//console.log(result.name);
// 					console.log(urls.href);
// 					res.send(200);
// 				}
// 				//alert("hello");
// 				//console.log(result.name);
// 				//db.close();
// 			});
// 		}
// 	});
// });



				/*
				app.post('/submit', function(req, res) {
					
					// new code should come over here
					User.findOne ({name: req.body.username, password: req.body.password}, function(err, user){
							if (err) {
								alert("inside if");
								console.log(err);
							}
							else if (user) {
								alert("inside else if");
								res.redirect('/index.html');
							}
							else {
								alert("inside else");
								window.location = "portfolio/home.html";
							}
						})
					
					res.send(200);

				});
				*/

//GET download a document from the folder
app.get('/download_document',function(req,res)
{
	console.log(req.query);
});

var server = http.createServer(app);

server.listen(app.get('port'), '0.0.0.0', function(){
	console.log('Express server listening on port ' + app.get('port'));
});
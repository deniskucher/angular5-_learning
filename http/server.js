var express = require('express');
var app = express();

var port = 8080; 

var bodyParser = require('body-parser'); 

// middleware для обработки данных запросов в формате JSON 
app.use(bodyParser.json()); 

// middleware для использования CORS 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 

    next();
});

var router = express.Router(); 

// загрузка всех элементов из бд 
router.get('/addData', () => {
    console.log('---GET---');
}); 

// создание элемента 
router.post('/addData', (req, res) => {
    console.log('----POST---');
    res.end(req.body.text+'99999'); 
});

app.use('', router); 

app.listen(port, function () {
    console.log('app running on port ' + port); 
})
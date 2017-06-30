var path = require('path');
var router = require('express').Router();

router.get('/', function(req,res){
	res.sendFile(path.res(__dirname, '../../build/index.html'));
});

module.exports = router;
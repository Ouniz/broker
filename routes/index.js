var express = require('express');
var router = express.Router();
var brokerCtrl = require('../controllers/broker.server.controller');



/* GET home page. */
router.get('/', function(reg, res) {
  return brokerCtrl.list(reg, res);
});

/* POST filter by member name - home page. */
router.post('/', function(reg, res){
  return brokerCtrl.filterByMember(reg, res);
});

/* GET New Note page. */
router.get('/newnote', function(reg, res){
  return brokerCtrl.getNote(reg, res)
});

/* POST New Note page. */
router.post('/newnote', function(reg, res) {
  return brokerCtrl.create(reg,res);
});

module.exports = router;

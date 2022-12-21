const { application } = require('express');
let express = require('express');
let router = express.Router();

let destinationController = require('./controller/destinationController.js')
let userController = require('./controller/userController.js')


router.get('/',(req,res) => {
    res.redirect('/home');
});

router.get('/home', destinationController.reservation);

router.post('/',destinationController.destinationOrder);

router.get('/person',userController.userList);

router.post('/persons',userController.userPost);

router.get('/confirmation',destinationController.Confirmation);

router.get('/validation',destinationController.Validation);


module.exports = router;

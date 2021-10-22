var express = require('express');
var router = express.Router();

var query = require('../lib/db');
var items_controller = require('../controller/itemController');

//Server Routes

router.get('/', (req, res) => {
       res.json({ message: "Hello to Flowerstore Exam" });
});
router.get('/products',items_controller.product_list); 
router.get('/product/:id',items_controller.get_product);
router.post('/addProduct',items_controller.add_product);
router.put('/edit/:id',items_controller.edit_product);
router.put('/status/:id',items_controller.status_product);
router.get('/orders',items_controller.order_list);



module.exports = router;
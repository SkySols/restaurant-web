const express  = require('express');
const router = express.Router();

const {
	getProductById,
	createProduct,
	getProduct,
	photo,
	removeProduct,
	updateProduct,
	getAllProducts,
} = require("../controllers/product");
const {
	isSignedIn,
	isAuthenticated,
	isSeller,
	isAdmin
} =  require('../controllers/authentication')
const {getUserById} = require('../controllers/user')
const {getRestaurantById} = require('../controllers/restaurant')

router.param("userId",getUserById);
router.param("restaurantId",getRestaurantById);
router.param("productId", getProductById);

router.post('/product/create/:restaurantId/:userId',
isSignedIn,isAuthenticated,isAdmin,createProduct);

router.get('/product/:productId', getProduct);
router.get('/product/photo/:productId', photo);

router.delete('/product/:productId/:userId',
isSignedIn,isAuthenticated,isAdmin,removeProduct);

router.put('/product/:productId/:userId',
isSignedIn,isAuthenticated,isAdmin,updateProduct);

router.get('/products/:restaurantId', getAllProducts);

module.exports = router;
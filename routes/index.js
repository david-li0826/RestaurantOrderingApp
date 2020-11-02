const express = require('express');
const router = express.Router();

/* GET all menuitems */
router.get('/items', getMenuItems);

exports.getMenuItems = (req, res) => {
	getMenuItems()
}

function getMenuItems () {
    // return all menu items 
}

/* GET all menu items under a categoty */
router.get('/items/:category', getMenuItemsByCategory)

export.getMenuItemsByCategory = (req, res) => {
    getMenuItemsByCategory(req.params.category)
}

function getMenuItemsByCategory (category) {
    // return all menu items under a category
}

/* UPDATE menu item */
router.post('/item/update/:id', updateMenuItem);

export.updateMenuItem = (req, res) => {
    updateMenuItem(req.params.id, req.body.name, req.body.price, req.body.availability, req.body.category, req.body.discount, req.body.description)
}

function updateMenuItem(itemid, name, price, availablility, category, discount, description) {
    // update details of a menu item
}

/* GET user info */
router.get('/users/:id', getUserInfo);

export.getUserInfo = (req, res) => {
    getUserInfo(req.params.id)
}

function getUserInfo(userid) {
    // return user info corresponding to the userid
}

/* UPDATE user info */
router.post('/users/update/:id', updateUserInfo);

export.updateUserInfo = (req, res) => {
    updateUserInfo(req.params.id, req.body.name, req.body.dateofbirth, req.body.phone, req.body.email)
}

function updateUserInfo(userid, name, dateofbirth, phone, email) {
    // update info of a user
}

/* GET all pending orders */
router.get('/orders', getOrders);

export.getOrders = (req, res) => {
    gerOrders()
}

function getOrders() {
    // get all pending orders
}

/* UPDATE a pending order */
router.post('/orders/update', updateOrder);

export.updateOrder = (req, res) => {
    updateOrder(req.body.status, req.body.details)
}

function updateOrder(orderid, status, details) {
    // create or update an order base on status
    // status can be {create, update, complete}
    // create will create a new pending order in DB and return a orderid
    // update will update an existing pending order
    // complete will delete an existing order and move the order details to log
}

function createLog(orderid, details) {
    // create a log for completed order
}

/* GET all order logs */
router.get('/logs', getLogs);

export.getLogs = (req, res) => {
    getLogs()
}

function getLogs() {
    // get all order logs (completed orders)
}

module.exports = router;

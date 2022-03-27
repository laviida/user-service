const express = require('express');
const router = express.Router();
const controller = require(`../controllers/userController`);
const { checkToken } = require(`../middlewares/middlewares`);

router.get('/user/:id', [checkToken], controller.getUser);

router.get('/list', [checkToken], controller.listUsers);

router.post('/new', [checkToken], controller.saveUser);

router.put('/user/:id', [checkToken], controller.updateUser);

router.delete('/user/:id', [checkToken], controller.deleteUser);


module.exports = router;
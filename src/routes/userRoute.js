const express = require('express');
const router = express.Router();
const controller = require(`../controllers/userController`);

router.get('/user/:id', [], controller.getUser);

router.get('/users', [], controller.listUsers);

router.post('/user', [], controller.saveUser);

router.put('/user/:id', [], controller.updateUser);

router.delete('/user/:id', [], controller.deleteUser);


module.exports = router;
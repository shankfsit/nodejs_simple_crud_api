const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');

router.get('/allusers', ctrlUser.allUsers);
router.get('/allusers/:id', ctrlUser.userone);
router.post('/allusers', ctrlUser.addUser);
router.put('/allusers/:id', ctrlUser.editUser);
router.delete('/allusers/:id', ctrlUser.deleteUser);

module.exports = router;
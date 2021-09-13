const express = require('express')
const router=express.Router();
const userController=require('../controllers/userController')

router.get('/:userName/:password', userController.login);
router.post('/', userController.post);
router.put('/:id', userController.update);
router.delete('/:id',userController.delete);

module.exports = router;

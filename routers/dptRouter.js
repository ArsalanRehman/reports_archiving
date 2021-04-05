const express = require('express');
const dptController = require('./../controllers/dptController');
const authController = require('./../controllers/authController');


const router = express.Router();

router.route('/:birim').get(authController.protect, dptController.getDpts).post(authController.protect ,   dptController.postDpts);

router
  .route('/:birim/:id')
  // .get(dptController.getDpt)
  .post(authController.protect , dptController.postDpt)
  .patch(authController.protect ,dptController.updateDpt)
  .delete(authController.protect, authController.restrictTo('admin'), dptController.deleteDpt);

  
module.exports = router;
//authController.restrictPostTo ,
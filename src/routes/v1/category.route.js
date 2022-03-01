const express = require('express');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router.route('/getCategories').get(validate(categoryValidation.getCategories), categoryController.getCategories);

module.exports = router;

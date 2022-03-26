const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router.route('/').get(validate(categoryValidation.getCategories), categoryController.getCategories);
router.route('/:categoryId').get(validate(categoryValidation.getCategory), categoryController.getCategoryById);
router
  .route('/')
  .post(auth('manageCategory'), validate(categoryValidation.createCategory), categoryController.createCategory);
router
  .route('/:categoryId')
  .patch(auth('manageCategory'), validate(categoryValidation.updateCategory), categoryController.updateCategory);
router
  .route('/:categoryId')
  .delete(auth('manageCategory'), validate(categoryValidation.deleteCategory), categoryController.deleteCategory);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category management
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     description: people retrieve all categories.
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Category'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get Specific category
 *     description: people retrieve specific category.
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         description: Category Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Category'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: create category
 *     description: only admin can create category.
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             optional:
 *               - img
 *             properties:
 *               name:
 *                 type: string
 *                 description: must be unique
 *               description:
 *                 type: string
 *               img:
 *                 type: string
 *             example:
 *               name: fake category
 *               description: lorep ipsum
 *               img: ''
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Category'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /categories:
 *   patch:
 *     summary: update category
 *     description: only admin can update category.
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Category Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             optional:
 *               - img
 *               - name
 *               - description
 *             properties:
 *               id:
 *                type: string
 *                description: which category will be updated
 *               name:
 *                 type: string
 *                 description: must be unique
 *               description:
 *                 type: string
 *               img:
 *                 type: string
 *             example:
 *               name: fake category
 *               description: lorep ipsum
 *               img: ''
 *     responses:
 *       "200":
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Category'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /categories:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete Specific category
 *     description: Delete specific category by categoryId.
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         description: Category Id
 *     responses:
 *       "200":
 *         description: OK
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

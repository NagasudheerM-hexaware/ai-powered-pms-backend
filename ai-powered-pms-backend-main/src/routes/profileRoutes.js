const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { profileValidator } = require('../validators/payload.validator');
const validateMiddleware = require('../middlewares/validate');
const cacheMiddleware = require('../middlewares/caching')

// Add cacheMiddleware() in between route functions to enable caching

/**
 * @swagger
 * components:
 *   schemas:
 *     Example:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the example
 *         name:
 *           type: string
 *           description: The name of the example
 *         description:
 *           type: string
 *           description: The description of the example
 *       example:
 *         id: d290f1ee-6c54-4b01-90e6-d701748f0851
 *         name: Example 1
 *         description: This is an example
 */

/**
 * @swagger
 * /examples:
 *   get:
 *     summary: Get all examples
 *     tags: [Examples]
 *     responses:
 *       200:
 *         description: The list of examples
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Example'
 */
router.get('/profiles', profileController.getProfiles);

/**
 * @swagger
 * /examples/{id}:
 *   get:
 *     summary: Get an example by id
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The example id
 *     responses:
 *       200:
 *         description: The example data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       404:
 *         description: Example not found
 */
router.get('/profiles/:id', profileController.getProfileById);

/**
 * @swagger
 * /examples:
 *   post:
 *     summary: Create a new example
 *     tags: [Examples]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Example'
 *     responses:
 *       201:
 *         description: The created example
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       400:
 *         description: Bad request
 */
router.post('/profiles', validateMiddleware(profileValidator), profileController.createProfile);

/**
 * @swagger
 * /examples/{id}:
 *   put:
 *     summary: Update an example by id
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The example id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Example'
 *     responses:
 *       200:
 *         description: The updated example
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Example not found
 */
router.put('/profiles/:id', validateMiddleware(profileValidator), profileController.updateProfile);



/**
 * @swagger
 * /examples/{id}:
 *   delete:
 *     summary: Delete an example by id
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The example id
 *     responses:
 *       200:
 *         description: The deleted example
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       404:
 *         description: Example not found
 */
router.delete('/profiles/:id', profileController.deleteProfile);

module.exports = router;
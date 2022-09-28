import { Router } from 'express';
import { createPostCategoryHandler } from '../../controllers/postCategory.controller';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import requireUser from '../../middlewares/requireUser';
import validateResource from '../../middlewares/validateResource';
import { createPostCategorySchema } from '../../schemas/postCategory.schema';

const routes = Router();

/**
 * @openapi
 * '/api/products/{productId}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Get a single product by the productId
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - name: productId
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */

routes.route('/').post(
  // [requireUser, validateResource(createProductSchema)],
  [validateResource(createPostCategorySchema)],
  createPostCategoryHandler
);

export default routes;

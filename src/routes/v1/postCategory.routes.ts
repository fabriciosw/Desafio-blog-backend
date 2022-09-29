import { NextFunction, Request, Response, Router } from 'express';
import requireAdmin from '../../middlewares/requireAdmin';
import validateResource from '../../middlewares/validateResource';
import { createPostCategorySchema } from '../../schemas/postCategory.schema';
import createPostCategoryHandler from '../../useCases/postCategories/createPostCategory';
import readAllPostCategories from '../../useCases/postCategories/readAllPostCategories';

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

routes
  .route('/')
  .post(
    [validateResource(createPostCategorySchema), requireAdmin],
    (req: Request, res: Response, next: NextFunction) =>
      createPostCategoryHandler.handle(req, res, next)
  )
  .get((req, res, next) => readAllPostCategories.handle(req, res, next));

export default routes;

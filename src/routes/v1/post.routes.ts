import { NextFunction, Request, Response, Router } from 'express';
import requireUser from '../../middlewares/requireUser';
import validateResource from '../../middlewares/validateResource';
import {
  createPostSchema,
  onlyParamsPostSchema,
} from '../../schemas/post.schema';
import createPostHandler from '../../useCases/posts/createPost';
import readAllPostsHandler from '../../useCases/posts/readAllPosts';
import readUserPostsHandler from '../../useCases/posts/readUserPosts';
import readPostByIdHandler from '../../useCases/posts/readPostById';

const routes = Router();

routes
  .route('/')
  .post(
    [validateResource(createPostSchema), requireUser],
    (req: Request, res: Response, next: NextFunction) =>
      createPostHandler.handle(req, res, next)
  )
  .get((req, res, next) => readAllPostsHandler.handle(req, res, next));

routes
  .route('/me')
  .get(requireUser, (req, res, next) =>
    readUserPostsHandler.handle(req, res, next)
  );

routes
  .route('/:postId')
  .get(validateResource(onlyParamsPostSchema), (req, res, next) =>
    readPostByIdHandler.handle(req, res, next)
  );

export default routes;

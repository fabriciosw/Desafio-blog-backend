import { NextFunction, Request, Response, Router } from 'express';
import requireUser from '../../middlewares/requireUser';
import validateResource from '../../middlewares/validateResource';
import { createPostSchema } from '../../schemas/post.schema';
import createPostHandler from '../../useCases/posts/createPost';
import readAllPostsHandler from '../../useCases/posts/readAllPosts';
import readUserPostsHandler from '../../useCases/posts/readUserPosts';

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
  .get([requireUser], (req: Request, res: Response, next: NextFunction) =>
    readUserPostsHandler.handle(req, res, next)
  );

export default routes;

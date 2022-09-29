import { Router } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import requireUser from '../../middlewares/requireUser';
import validateResource from '../../middlewares/validateResource';
import { createPostSchema } from '../../schemas/post.schema';
import createPostHandler from '../../useCases/posts/createPost';
import readAllPostsHandler from '../../useCases/posts/readAllPosts';

const routes = Router();

routes
  .route('/')
  .post(validateResource(createPostSchema), (req, res, next) =>
    createPostHandler.handle(req, res, next)
  )
  .get((req, res, next) => readAllPostsHandler.handle(req, res, next));

export default routes;

import { Router } from 'express';
import validateResource from '../../middlewares/validateResource';
import { createSessionSchema } from '../../schemas/session.schema';
import createSessionHandler from '../../useCases/sessions/createSession';

const routes = Router();

routes
  .route('/')
  .post(validateResource(createSessionSchema), (req, res, next) =>
    createSessionHandler.handle(req, res, next)
  );

export default routes;

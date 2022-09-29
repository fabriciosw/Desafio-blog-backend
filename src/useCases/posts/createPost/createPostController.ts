import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getCustomRepository } from 'typeorm';
import ApiError from '../../../utils/apiError.utils';
import IController from '../../IController';
import createPostUseCase from './createPostUseCase';

export default class CreatePostController implements IController {
  constructor(private useCase: createPostUseCase) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { body } = request;
      const post = await this.useCase.execute(getCustomRepository, body);

      return response
        .status(StatusCodes.CREATED)
        .json({ message: 'Post created', post });
    } catch (error: any) {
      if (error instanceof ApiError) return next(error);

      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        `CreatePostController: ${error.message}`
      );
    }
  }
}

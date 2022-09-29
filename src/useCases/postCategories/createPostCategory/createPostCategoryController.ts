import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getCustomRepository } from 'typeorm';
import { GetCustomPostCategoryRepository } from '../../../database/repositories/implementations/postCategory.repository';
import ApiError from '../../../utils/apiError.utils';
import IController from '../../IController';
import createPostCategoryUseCase from './createPostCategoryUseCase';

export default class CreatePostCategoryController implements IController {
  constructor(private useCase: createPostCategoryUseCase) {}

  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { body } = request;
      const postCategory = await this.useCase.execute(
        getCustomRepository as GetCustomPostCategoryRepository,
        body
      );

      return response
        .status(StatusCodes.CREATED)
        .json({ message: 'Post category created', postCategory });
    } catch (error: any) {
      if (error instanceof ApiError) return next(error);

      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        `CreatePostCategoryController: ${error.message}`
      );
    }
  }
}

// import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import { CreatePostCategoryInput } from '../schemas/postCategory.schema';
// import { createPostCategoryService } from '../services/postCategory.service';

// export async function createPostCategoryHandler(
//   request: Request<{}, {}, CreatePostCategoryInput['body']>,
//   response: Response
// ) {
//   const { body } = request;

//   const DTO = await createPostCategoryService(body);

//   return response
//     .status(StatusCodes.CREATED)
//     .json({ message: 'Post category created', postCategory: DTO });
// }

import PostCategoryRepository from '../../../database/repositories/implementations/postCategory.repository';
import CreatePostCategoryController from './createPostCategoryController';
import CreatePostCategoryUseCase from './createPostCategoryUseCase';

const useCase = new CreatePostCategoryUseCase(PostCategoryRepository);

const controller = new CreatePostCategoryController(useCase);

export default controller;

import PostCategoryRepository from '../../../database/repositories/implementations/postCategory.repository';
import ReadAllPostCategoryController from './readAllPostCategoriesController';
import CreatePostCategoryUseCase from './readAllPostCategoriesUseCase';

const useCase = new CreatePostCategoryUseCase(PostCategoryRepository);

const controller = new ReadAllPostCategoryController(useCase);

export default controller;

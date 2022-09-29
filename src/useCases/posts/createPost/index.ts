import PostRepository from '../../../database/repositories/implementations/post.repository';
import PostCategoryRepository from '../../../database/repositories/implementations/postCategory.repository';
import CreatePostController from './createPostController';
import CreatePostUseCase from './createPostUseCase';

const useCase = new CreatePostUseCase(PostRepository, PostCategoryRepository);

const controller = new CreatePostController(useCase);

export default controller;

import PostRepository from '../../../database/repositories/implementations/post.repository';
import ReadAllPostsController from './readUserPostsController';
import ReadAllPostsUseCase from './readUserPostsUseCase';

const useCase = new ReadAllPostsUseCase(PostRepository);

const controller = new ReadAllPostsController(useCase);

export default controller;

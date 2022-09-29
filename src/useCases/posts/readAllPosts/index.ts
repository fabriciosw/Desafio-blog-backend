import PostRepository from '../../../database/repositories/implementations/post.repository';
import ReadAllPostsController from './readAllPostsController';
import ReadAllPostsUseCase from './readAllPostsUseCase';

const useCase = new ReadAllPostsUseCase(PostRepository);

const controller = new ReadAllPostsController(useCase);

export default controller;

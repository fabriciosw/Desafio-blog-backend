import IUseCase from '../../IUseCase';
import { GetCustomPostRepository } from '../../../database/repositories/implementations/post.repository';
import IPostRepository from '../../../database/repositories/interfaces/PostRepository/IPostRepository';

export default class ReadAllPostsUseCase implements IUseCase {
  constructor(private postRepository: IPostRepository) {}

  public async execute(getCustomRepository: GetCustomPostRepository) {
    const postRepository = getCustomRepository(this.postRepository);

    const posts = await postRepository.readAll();

    return posts;
  }
}

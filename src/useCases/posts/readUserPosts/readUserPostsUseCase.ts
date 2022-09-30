import IUseCase from '../../IUseCase';
import { IPostRepository } from '../../../database/repositories/interfaces/PostRepository';

export default class ReadUserPostsUseCase implements IUseCase {
  constructor(private postRepository: IPostRepository) {}

  public async execute(userId: string) {
    const posts = await this.postRepository.findByAuthorId(userId);

    return posts;
  }
}

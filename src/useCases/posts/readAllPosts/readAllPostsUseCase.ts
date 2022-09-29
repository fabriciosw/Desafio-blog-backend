import IUseCase from '../../IUseCase';
import IPostRepository from '../../../database/repositories/interfaces/PostRepository/IPostRepository';
import GetCustomRepositoryType from '../../../typings/getCustomRepository';

export default class ReadAllPostsUseCase implements IUseCase {
  constructor(private postRepository: IPostRepository) {}

  public async execute(getCustomRepository: GetCustomRepositoryType) {
    const postRepository = getCustomRepository(this.postRepository);

    const posts = await postRepository.readAll();

    return posts;
  }
}

import IUseCase from '../../IUseCase';
import { IPostRepositoryClass } from '../../../database/repositories/interfaces/PostRepository';
import GetCustomRepositoryType from '../../../typings/GetCustomRepositoryType';

export default class ReadAllPostsUseCase implements IUseCase {
  constructor(private postRepository: IPostRepositoryClass) {}

  public async execute(getCustomRepository: GetCustomRepositoryType) {
    const postRepository = getCustomRepository(this.postRepository);

    const posts = await postRepository.readAll();

    return posts;
  }
}

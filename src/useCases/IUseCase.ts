import { GetCustomPostRepository } from '../database/repositories/implementations/post.repository';
import { GetCustomPostCategoryRepository } from '../database/repositories/implementations/postCategory.repository';
import { GetCustomUserRepository } from '../database/repositories/implementations/user.repository';

export default interface UseCase {
  execute(
    getCustomRepository:
      | GetCustomUserRepository
      | GetCustomPostCategoryRepository
      | GetCustomPostRepository,
    data: any
  ): Promise<any> | any;
}

import { GetCustomPostCategoryRepository } from '../database/repositories/implementations/postCategory.repository';
import { GetCustomUserRepository } from '../database/repositories/implementations/user.repository';

export default interface UseCase {
  execute(
    getCustomRepository:
      | GetCustomUserRepository
      | GetCustomPostCategoryRepository,
    data: any
  ): Promise<any> | any;
}

import IUseCase from '../../IUseCase';
import { IPostCategoryRepositoryClass } from '../../../database/repositories/interfaces/PostCategoryRepository';
import GetCustomRepositoryType from '../../../typings/GetCustomRepositoryType';

export default class ReadAllPostCategoriesUseCase implements IUseCase {
  constructor(private postCategoryRepository: IPostCategoryRepositoryClass) {}

  public async execute(getCustomRepository: GetCustomRepositoryType) {
    const postCategoryRepository = getCustomRepository(
      this.postCategoryRepository
    );

    const postCategories = await postCategoryRepository.readAll();

    return postCategories;
  }
}

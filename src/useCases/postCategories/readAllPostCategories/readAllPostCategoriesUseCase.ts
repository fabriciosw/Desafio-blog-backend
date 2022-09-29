import IUseCase from '../../IUseCase';
import IPostCategoryRepository from '../../../database/repositories/interfaces/PostCategoryRepository/IPostCategoryRepository';
import { GetCustomPostCategoryRepository } from '../../../database/repositories/implementations/postCategory.repository';

export default class ReadAllPostCategoriesUseCase implements IUseCase {
  constructor(private postCategoryRepository: IPostCategoryRepository) {}

  public async execute(getCustomRepository: GetCustomPostCategoryRepository) {
    const postCategoryRepository = getCustomRepository(
      this.postCategoryRepository
    );

    const postCategories = await postCategoryRepository.readAll();

    return postCategories;
  }
}

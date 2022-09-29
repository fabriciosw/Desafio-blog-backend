import IUseCase from '../../IUseCase';
import IPostCategoryRepository from '../../../database/repositories/interfaces/PostCategoryRepository/IPostCategoryRepository';
import GetCustomRepositoryType from '../../../typings/getCustomRepository';

export default class ReadAllPostCategoriesUseCase implements IUseCase {
  constructor(private postCategoryRepository: IPostCategoryRepository) {}

  public async execute(getCustomRepository: GetCustomRepositoryType) {
    const postCategoryRepository = getCustomRepository(
      this.postCategoryRepository
    );

    const postCategories = await postCategoryRepository.readAll();

    return postCategories;
  }
}

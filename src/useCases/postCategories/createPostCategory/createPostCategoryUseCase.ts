import { StatusCodes } from 'http-status-codes';
import { CreatePostCategoryInput } from '../../../schemas/postCategory.schema';
import ApiError from '../../../utils/apiError.utils';
import IUseCase from '../../IUseCase';
import IPostCategoryRepository, {
  IPostCategoryRepositoryInterface,
} from '../../../database/repositories/interfaces/PostCategoryRepository/IPostCategoryRepository';
import { GetCustomPostCategoryRepository } from '../../../database/repositories/implementations/postCategory.repository';

export default class CreatePostCategoryUseCase implements IUseCase {
  constructor(private postCategoryRepository: IPostCategoryRepository) {}

  private async validateFields(
    postCategoryRepository: IPostCategoryRepositoryInterface,
    name: string
  ) {
    const category = await postCategoryRepository.findByName(name);

    if (category)
      throw new ApiError(
        StatusCodes.CONFLICT,
        "There's already an category with that name"
      );
  }

  public async execute(
    getCustomRepository: GetCustomPostCategoryRepository,
    body: CreatePostCategoryInput['body']
  ) {
    const postCategoryRepository = getCustomRepository(
      this.postCategoryRepository
    );

    await this.validateFields(postCategoryRepository, body.name);

    const postCategory = await postCategoryRepository.create({
      name: body.name,
    });

    await postCategoryRepository.save(postCategory);

    const DTO = {
      id: postCategory.id,
      name: postCategory.name,
      created_at: postCategory.created_at,
    };

    return DTO;
  }
}

import { StatusCodes } from 'http-status-codes';
import { CreatePostCategoryInput } from '../../../schemas/postCategory.schema';
import ApiError from '../../../utils/apiError.utils';
import IUseCase from '../../IUseCase';
import { IPostCategoryRepository } from '../../../database/repositories/interfaces/PostCategoryRepository';

export default class CreatePostCategoryUseCase implements IUseCase {
  constructor(private postCategoryRepository: IPostCategoryRepository) {}

  private async validateFields(
    postCategoryRepository: IPostCategoryRepository,
    name: string
  ) {
    const category = await postCategoryRepository.findByName(name);

    if (category)
      throw new ApiError(
        StatusCodes.CONFLICT,
        "There's already an category with that name"
      );
  }

  public async execute(body: CreatePostCategoryInput['body']) {
    await this.validateFields(this.postCategoryRepository, body.name);

    const postCategory = await this.postCategoryRepository.create({
      name: body.name,
    });

    await this.postCategoryRepository.save(postCategory);

    const DTO = {
      id: postCategory.id,
      name: postCategory.name,
      created_at: postCategory.created_at,
    };

    return DTO;
  }
}

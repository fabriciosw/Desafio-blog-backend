import { StatusCodes } from 'http-status-codes';
import { CreatePostInput } from '../../../schemas/post.schema';
import ApiError from '../../../utils/apiError.utils';
import GetCustomRepositoryType from '../../../typings/GetCustomRepositoryType';
import { IPostRepositoryClass } from '../../../database/repositories/interfaces/PostRepository';
import {
  IPostCategoryRepositoryClass,
  IPostCategoryRepositoryInterface,
} from '../../../database/repositories/interfaces/PostCategoryRepository';

export default class CreatePostUseCase {
  constructor(
    private postRepository: IPostRepositoryClass,
    private postCategoryRepository: IPostCategoryRepositoryClass
  ) {}

  private async validateFields(
    postCategoryRepository: IPostCategoryRepositoryInterface,
    id: string
  ) {
    const category = await postCategoryRepository.findById(id);

    if (!category)
      throw new ApiError(
        StatusCodes.CONFLICT,
        'categoryId sent does not exist'
      );
  }

  public async execute(
    getCustomRepository: GetCustomRepositoryType,
    body: CreatePostInput['body'],
    userId: string
  ) {
    const postRepository = getCustomRepository(this.postRepository);

    const postCategoryRepository = getCustomRepository(
      this.postCategoryRepository
    );

    const { categoryId, content, title } = body;

    await this.validateFields(postCategoryRepository, body.categoryId);

    const post = await postRepository.create({
      authorId: userId,
      categoryId,
      content,
      title,
    });

    await postRepository.save(post);

    const DTO = {
      id: post.id,
      created_at: post.created_at,
    };

    return DTO;
  }
}

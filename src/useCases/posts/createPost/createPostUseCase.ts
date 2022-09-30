import { StatusCodes } from 'http-status-codes';
import { CreatePostInput } from '../../../schemas/post.schema';
import ApiError from '../../../utils/apiError.utils';
import { IPostRepository } from '../../../database/repositories/interfaces/PostRepository';
import { IPostCategoryRepository } from '../../../database/repositories/interfaces/PostCategoryRepository';

export default class CreatePostUseCase {
  constructor(
    private postRepository: IPostRepository,
    private postCategoryRepository: IPostCategoryRepository
  ) {}

  private async validateFields(
    postCategoryRepository: IPostCategoryRepository,
    id: string
  ) {
    const category = await postCategoryRepository.findById(id);

    if (!category)
      throw new ApiError(
        StatusCodes.CONFLICT,
        'categoryId sent does not exist'
      );
  }

  public async execute(body: CreatePostInput['body'], userId: string) {
    const { categoryId, content, title } = body;

    await this.validateFields(this.postCategoryRepository, body.categoryId);

    const post = await this.postRepository.create({
      authorId: userId,
      categoryId,
      content,
      title,
    });

    await this.postRepository.save(post);

    const DTO = {
      id: post.id,
      createdAt: post.createdAt,
    };

    return DTO;
  }
}

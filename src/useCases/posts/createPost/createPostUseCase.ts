import { StatusCodes } from 'http-status-codes';
import { CreatePostInput } from '../../../schemas/post.schema';
import IPostRepository from '../../../database/repositories/interfaces/PostRepository/IPostRepository';
import IPostCategoryRepository, {
  IPostCategoryRepositoryInterface,
} from '../../../database/repositories/interfaces/PostCategoryRepository/IPostCategoryRepository';
import ApiError from '../../../utils/apiError.utils';
import GetCustomRepositoryType from '../../../typings/getCustomRepository';

export default class CreatePostUseCase {
  constructor(
    private postRepository: IPostRepository,
    private postCategoryRepository: IPostCategoryRepository
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
    body: CreatePostInput['body']
  ) {
    const postRepository = getCustomRepository(this.postRepository);

    const postCategoryRepository = getCustomRepository(
      this.postCategoryRepository
    );

    const { categoryId, content, title } = body;

    await this.validateFields(postCategoryRepository, body.categoryId);

    const post = await postRepository.create({
      authorId: 'ae0a9051-7edd-4c34-8595-193c368ca991',
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

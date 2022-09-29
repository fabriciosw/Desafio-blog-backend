import {
  EntityRepository,
  getRepository,
  ObjectType,
  Repository,
} from 'typeorm';
import PostCategory from '../../entities/PostCategory.Entity';
import { ICreatePostCategory } from '../interfaces/PostCategoryRepository';
import IPostCategoryRepository, {
  IPostCategoryRepositoryInterface,
} from '../interfaces/PostCategoryRepository/IPostCategoryRepository';

@EntityRepository(PostCategory)
export default class PostCategoryRepository
  implements IPostCategoryRepositoryInterface
{
  ormRepository: Repository<PostCategory>;

  constructor() {
    this.ormRepository = getRepository(PostCategory);
  }

  async create({ name }: ICreatePostCategory): Promise<PostCategory> {
    const postCategory = await this.ormRepository.create({ name });

    return postCategory;
  }

  async save(postCategory: PostCategory): Promise<PostCategory> {
    const newPostCategory = await this.ormRepository.save(postCategory);

    return newPostCategory;
  }

  async readAll(): Promise<PostCategory[]> {
    const postCategories = await this.ormRepository.find();

    return postCategories;
  }

  async findByName(name: string): Promise<PostCategory | undefined> {
    const postCategory = await this.ormRepository.findOne({ where: { name } });

    return postCategory;
  }
}

export type GetCustomPostCategoryRepository = (
  repo: ObjectType<IPostCategoryRepository>
) => IPostCategoryRepositoryInterface;

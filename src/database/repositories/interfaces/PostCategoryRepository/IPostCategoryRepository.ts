import { ICreatePostCategory } from '.';
import PostCategory from '../../../entities/PostCategory.Entity';

export default interface IPostCategoryRepository {
  new (
    ormRepository: IPostCategoryRepository
  ): IPostCategoryRepositoryInterface;
}

export interface IPostCategoryRepositoryInterface {
  create(postCategory: ICreatePostCategory): Promise<PostCategory>;
  save(postCategory: PostCategory): Promise<PostCategory>;
  findByName(name: string): Promise<PostCategory | undefined>;
  readAll(): Promise<PostCategory[]>;
}

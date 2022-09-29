import { ICreatePost } from '.';
import Post from '../../../entities/Post.Entity';

export default interface IPostRepository {
  new (ormRepository: IPostRepository): IPostRepositoryInterface;
}

export interface IPostRepositoryInterface {
  create(post: ICreatePost): Promise<Post>;
  save(post: Post): Promise<Post>;
  findByAuthorId(id: string): Promise<Post[]>;
  readAll(): Promise<Post[]>;
}

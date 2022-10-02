import { ICreatePost } from '.';
import Post from '../../../entities/Post.Entity';

export interface IPostRepository {
  create(post: ICreatePost): Promise<Post>;
  save(post: Post): Promise<Post>;
  findByAuthorId(id: string): Promise<Post[]>;
  findById(id: string): Promise<Post | undefined>;
  readAll(): Promise<Post[]>;
}

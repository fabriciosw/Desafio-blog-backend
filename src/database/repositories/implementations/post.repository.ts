import {
  EntityRepository,
  getRepository,
  ObjectType,
  Repository,
} from 'typeorm';
import Post from '../../entities/Post.Entity';

import { ICreatePost } from '../interfaces/PostRepository';
import IPostRepository, {
  IPostRepositoryInterface,
} from '../interfaces/PostRepository/IPostRepository';

@EntityRepository(Post)
export default class PostRepository implements IPostRepositoryInterface {
  ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  async create({
    authorId,
    categoryId,
    content,
    title,
  }: ICreatePost): Promise<Post> {
    const post = await this.ormRepository.create({
      author: authorId,
      category: categoryId,
      content,
      title,
    });

    return post;
  }

  async save(post: Post): Promise<Post> {
    const newPost = await this.ormRepository.save(post);

    return newPost;
  }

  async readAll(): Promise<Post[]> {
    const posts = await this.ormRepository
      .createQueryBuilder('posts')
      .innerJoinAndSelect('posts.author', 'author')
      .innerJoinAndSelect('posts.category', 'category')
      .select([
        'posts.id',
        'posts.title',
        'posts.content',
        'posts.created_at',
        'author.name',
        'category.name',
      ])
      .getMany();

    return posts;
  }

  async findByAuthorId(authorId: string): Promise<Post[]> {
    const posts = await this.ormRepository.find({
      where: { authorId },
    });

    return posts;
  }
}

export type GetCustomPostRepository = (
  repo: ObjectType<IPostRepository>
) => IPostRepositoryInterface;

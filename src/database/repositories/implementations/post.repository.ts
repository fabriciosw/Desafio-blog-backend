import { EntityRepository, getRepository } from 'typeorm';
import Post from '../../entities/Post.Entity';
import { ICreatePost } from '../interfaces/PostRepository';
import { IPostRepository } from '../interfaces/PostRepository/IPostRepository';

@EntityRepository(Post)
export default class PostRepository implements IPostRepository {
  async create({
    authorId,
    categoryId,
    content,
    title,
  }: ICreatePost): Promise<Post> {
    const post = await getRepository(Post).create({
      author: authorId,
      category: categoryId,
      content,
      title,
    });

    return post;
  }

  async save(post: Post): Promise<Post> {
    const newPost = await getRepository(Post).save(post);

    return newPost;
  }

  async readAll(): Promise<Post[]> {
    const posts = await getRepository(Post)
      .createQueryBuilder('posts')
      .innerJoinAndSelect('posts.author', 'author')
      .innerJoinAndSelect('posts.category', 'category')
      .select([
        'posts.id',
        'posts.title',
        'posts.content',
        'posts.createdAt',
        'author.name',
        'category.name',
      ])
      .getMany();

    return posts;
  }

  async findByAuthorId(author: string): Promise<Post[]> {
    const posts = await getRepository(Post).find({
      where: { author },
    });

    return posts;
  }

  async findById(id: string): Promise<Post | undefined> {
    const post = await getRepository(Post)
      .createQueryBuilder('posts')
      .where({ id })
      .innerJoinAndSelect('posts.author', 'author')
      .innerJoinAndSelect('posts.category', 'category')
      .select([
        'posts.id',
        'posts.title',
        'posts.content',
        'posts.createdAt',
        'author.name',
        'category.name',
      ])
      .getOne();

    return post;
  }
}

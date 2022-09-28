import { EntityRepository, Repository } from 'typeorm';
import PostCategory from '../entities/PostCategory.Entity';

@EntityRepository(PostCategory)
export default class PostRepository extends Repository<PostCategory> {}

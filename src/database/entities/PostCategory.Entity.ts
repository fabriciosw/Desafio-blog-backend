import { Column, Entity, OneToMany } from 'typeorm';
import Base from './Base.Entity';
import Post from './Post.Entity';

@Entity('postCategories')
export default class PostCategory extends Base {
  @Column({ length: 50 })
  public name: string;

  @OneToMany(() => Post, (post: Post) => post.categoryId)
  posts: Post[];
}

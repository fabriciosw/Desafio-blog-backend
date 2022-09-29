import { Column, Entity, ManyToOne } from 'typeorm';
import Category from './PostCategory.Entity';
import User from './User.Entity';
import Base from './Base.Entity';

@Entity('posts')
export default class Post extends Base {
  // @Column()
  // public authorId: string;

  @ManyToOne(() => User, (user) => user.posts)
  authorId: User;

  // @JoinColumn({ name: 'authorId' }) author: User;

  // @Column()
  // public categoryId: string;
  @ManyToOne(() => Category, (category) => category.posts)
  categoryId: Category;

  // @JoinColumn({ name: 'categoryId' }) category: Category;

  @Column()
  title: string;

  @Column()
  content: string;
}

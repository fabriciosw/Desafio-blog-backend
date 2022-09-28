/* eslint-disable import/no-cycle */
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

  // @Column()
  // public categoryId: string;

  @ManyToOne(() => Category, (category) => category.posts)
  categoryId: Category;

  @Column()
  public title: string;

  @Column()
  public content: string;
}

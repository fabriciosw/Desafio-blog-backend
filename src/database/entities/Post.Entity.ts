import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Category from './PostCategory.Entity';
import User from './User.Entity';
import Base from './Base.Entity';

@Entity('posts')
export default class Post extends Base {
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn()
  author: string;

  @ManyToOne(() => Category, (category) => category.posts)
  @JoinColumn()
  category: string;

  @Column()
  title: string;

  @Column()
  content: string;
}

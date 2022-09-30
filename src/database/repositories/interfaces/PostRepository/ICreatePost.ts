import IPost from '../../../../models/post.model';

export interface ICreatePost extends Pick<IPost, 'title' | 'content'> {
  authorId: string;
  categoryId: string;
}

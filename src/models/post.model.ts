export default interface IPost {
  id: string;
  authorId: string;
  categoryId: string;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

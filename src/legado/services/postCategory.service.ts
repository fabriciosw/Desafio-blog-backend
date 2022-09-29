// import { getCustomRepository } from 'typeorm';
// import PostRepository from '../database/repositories/implementations/postCategory.repository';
// import { CreatePostCategoryInput } from '../schemas/postCategory.schema';

// export async function createPostCategoryService(
//   body: CreatePostCategoryInput['body']
// ) {
//   const postCategoryRepository = getCustomRepository(PostRepository);

//   const user = postCategoryRepository.create({
//     name: body.name,
//   });

//   await postCategoryRepository.save(user);

//   const DTO = {
//     id: user.id,
//     name: user.name,
//     created_at: user.created_at,
//   };

//   return DTO;
// }

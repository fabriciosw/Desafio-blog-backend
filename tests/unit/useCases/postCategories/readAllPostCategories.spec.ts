import PostCategoryRepositoryFake from '../../../../src/database/repositories/fakes/postCategory.repository';
import ReadAllPostCategoriesUseCase from '../../../../src/useCases/postCategories/readAllPostCategories/readAllPostCategoriesUseCase';

describe('readAllPostCategoriesUseCase', () => {
  const postCategoryRepositoryFake = new PostCategoryRepositoryFake();
  const sut = new ReadAllPostCategoriesUseCase(postCategoryRepositoryFake);

  describe('Should be able to', () => {
    it('create a category', async () => {
      const postCategories = await sut.execute();

      expect(postCategories.length).toBe(2);
    });
  });
});

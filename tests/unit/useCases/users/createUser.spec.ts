import UserRepositoryFake from '../../../../src/database/repositories/fakes/user.repository';
import CreateUserUseCase from '../../../../src/useCases/users/createUser/createUserUseCase';
import getCustomRepositoryFake from '../../getCustomRepositoryFake';

describe('createUserUseCase', () => {
  const sut = new CreateUserUseCase(UserRepositoryFake);

  describe('Should not be able to', () => {
    it('create an user if email already exists on database', async () => {
      await expect(
        sut.execute(getCustomRepositoryFake, {
          email: 'leandro@email.com',
          name: 'Leandro',
          password: '123456',
        })
      ).rejects.toThrow("There's already an user with that Email");
    });
  });

  describe('Should be able to', () => {
    it('create an user', async () => {
      const user = await sut.execute(getCustomRepositoryFake, {
        email: 'fabricio@email.com',
        name: 'Fabricio',
        password: '123456',
      });

      expect(user.email).toBe('fabricio@email.com');
    });
  });
});

import UserPermission from '../../entities/enums/UserPermission';
import User from '../../entities/User.Entity';
import { ICreateUser } from '../interfaces/UserRepository';
import { IUserRepository } from '../interfaces/UserRepository/IUserRepository';

export default class UserRepositoryFake implements IUserRepository {
  private mockUsers: User[] = [
    {
      id: '0d98b398-2c58-4c87-ac76-df5e6874073b',
      name: 'Leandro',
      email: 'leandro@email.com',
      password: '$2b$10$4a3HaBpia1PPYN/D0yoBwe0faSYKdPBvEnmZmkLR.p1R9aZWOZ3sq',
      permission: UserPermission.ADMIN,
      created_at: new Date('2022-09-28 17:53:22.930'),
      updated_at: new Date('2022-09-28 17:53:22.930'),
      posts: [],
    },
  ];

  async create(user: ICreateUser): Promise<User> {
    const newUser = {
      ...user,
      posts: [],
      id: '0d98b398-2c58-4c87-ac76-df5e6874073a',
      created_at: new Date(Date.now().valueOf()),
      updated_at: new Date(Date.now().valueOf()),
    };

    return newUser;
  }

  async save(user: User): Promise<User> {
    this.mockUsers.push(user);

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const foundUser = this.mockUsers.find((user) => user.id === id);

    return foundUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const foundUser = this.mockUsers.find((user) => user.email === email);
    return foundUser;
  }
}

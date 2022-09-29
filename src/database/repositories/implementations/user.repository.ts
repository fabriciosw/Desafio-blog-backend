import { EntityRepository, getRepository, Repository } from 'typeorm';
import User from '../../entities/User.Entity';
import { ICreateUser } from '../interfaces/UserRepository';
import { IUserRepositoryInterface } from '../interfaces/UserRepository/IUserRepository';

@EntityRepository(User)
export default class UserRepository implements IUserRepositoryInterface {
  ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    permission,
  }: ICreateUser): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      permission,
    });

    return user;
  }

  async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { id } });
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });
    return user;
  }
}

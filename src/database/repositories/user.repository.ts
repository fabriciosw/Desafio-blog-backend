import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User.Entity';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public findById(id: number): Promise<User | undefined> {
    const user = this.findOne({ where: { id } });
    return user;
  }

  public findByEmail(email: string): Promise<User | undefined> {
    const user = this.findOne({ where: { email } });
    return user;
  }
}

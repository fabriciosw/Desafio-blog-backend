import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import { CreateUserInput } from '../../../schemas/user.schema';
import ApiError from '../../../utils/apiError.utils';
import IUseCase from '../../IUseCase';
import UserPermission from '../../../database/entities/enums/UserPermission';
import config from '../../../config/config';
import IUserRepository, {
  IUserRepositoryInterface,
} from '../../../database/repositories/interfaces/UserRepository/IUserRepository';
import { GetCustomUserRepository } from '../../../database/repositories/implementations/user.repository';

export default class CreateUserUseCase implements IUseCase {
  constructor(private userRepository: IUserRepository) {}

  private async validateFields(
    userRepository: IUserRepositoryInterface,
    email: string
  ) {
    const userExists = await userRepository.findByEmail(email);

    if (userExists)
      throw new ApiError(
        StatusCodes.CONFLICT,
        "There's already an user with that Email"
      );
  }

  public async execute(
    getCustomRepository: GetCustomUserRepository,
    body: CreateUserInput['body']
  ) {
    const userRepository = getCustomRepository(this.userRepository);

    await this.validateFields(userRepository, body.email);

    const hashedPassword = await bcrypt.hash(
      body.password,
      config.saltWorkFactor
    );

    const user = await userRepository.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      permission: UserPermission.NONE,
    });

    await userRepository.save(user);

    const DTO = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
    };

    return DTO;
  }
}

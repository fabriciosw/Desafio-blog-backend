import { StatusCodes } from 'http-status-codes';
import { compare } from 'bcrypt';
import { CreateSessionInput } from '../../../schemas/session.schema';
import ApiError from '../../../utils/apiError.utils';
import IUseCase from '../../IUseCase';
import config from '../../../config/config';
import IUserRepository from '../../../database/repositories/interfaces/UserRepository/IUserRepository';
import GetCustomRepositoryType from '../../../typings/getCustomRepository';
import { signJwt } from '../../../utils/jwt.utils';

export default class CreateSessionUseCase implements IUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async execute(
    getCustomRepository: GetCustomRepositoryType,
    body: CreateSessionInput['body']
  ) {
    const { email, password } = body;

    const usersRepository = getCustomRepository(this.userRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        'Incorrect email/password combination.'
      );
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        'Incorrect email/password combination.'
      );
    }

    const token = signJwt(
      { auth: `${user.permission}` },
      {
        subject: `${user.id}`,
        expiresIn: config.accessTokenTtl,
      }
    );

    return token;
  }
}

import UserRepository from '../../../database/repositories/implementations/user.repository';
import CreateUserController from './createUserController';
import CreateUserUseCase from './createUserUseCase';

const useCase = new CreateUserUseCase(UserRepository);

const controller = new CreateUserController(useCase);

export default controller;

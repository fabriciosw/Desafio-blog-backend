import UserRepository from '../../../database/repositories/implementations/user.repository';
import CreateSessionController from './createSessionController';
import CreateSessionUseCase from './createSessionUseCase';

const useCase = new CreateSessionUseCase(UserRepository);

const controller = new CreateSessionController(useCase);

export default controller;

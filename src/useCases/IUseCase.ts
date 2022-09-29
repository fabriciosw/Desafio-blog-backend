import GetCustomRepositoryType from '../typings/GetCustomRepositoryType';

export default interface UseCase {
  execute(
    getCustomRepository: GetCustomRepositoryType,
    data: any
  ): Promise<any>;
}

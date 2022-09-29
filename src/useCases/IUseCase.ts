import GetCustomRepositoryType from '../typings/getCustomRepository';

export default interface UseCase {
  execute(
    getCustomRepository: GetCustomRepositoryType,
    data: any
  ): Promise<any> | any;
}

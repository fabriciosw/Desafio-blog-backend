import { ObjectType } from 'typeorm';

type GetCustomRepositoryType = <T>(
  customRepository: ObjectType<T>,
  connectionName?: string | undefined
) => T;

export default GetCustomRepositoryType;

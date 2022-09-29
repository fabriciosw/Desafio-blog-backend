// import bcrypt from 'bcrypt';
// import { StatusCodes } from 'http-status-codes';
// import { getCustomRepository } from 'typeorm';
// import config from '../config/config';
// import UserPermission from '../database/entities/enums/UserPermission';
// import UserRepository from '../database/repositories/user.repository';
// import { CreateUserInput } from '../schemas/user.schema';
// import ApiError from '../utils/apiError.utils';

// export async function createUserService(body: CreateUserInput['body']) {
//   const usersRepository = getCustomRepository(UserRepository);

//   const userExists = await usersRepository.findByEmail(body.email);

//   if (userExists)
//     throw new ApiError(
//       StatusCodes.CONFLICT,
//       "There's already an user with that Email"
//     );

//   const hashedPassword = await bcrypt.hash(
//     body.password,
//     config.saltWorkFactor
//   );

//   const user = usersRepository.create({
//     name: body.name,
//     email: body.email,
//     password: hashedPassword,
//     permission: UserPermission.NONE,
//   });

//   await usersRepository.save(user);

//   const DTO = {
//     id: user.id,
//     name: user.name,
//     email: user.email,
//     created_at: user.created_at,
//   };

//   return DTO;
// }

// // export async function listUsersService() {
// //   const usersRepository = getCustomRepository(UserRepository);

// //   const users = await usersRepository.find({
// //     order: { created_at: 'ASC' },
// //     select: ['id', 'name', 'birthDate', 'obs', 'cpf', 'permission'],
// //   });

// //   return users;
// // }

// // export async function editUserService(
// //   id: string,
// //   info: { obs?: string; permission: boolean }
// // ) {
// //   const usersRepository = getCustomRepository(UserRepository);

// //   const user = await usersRepository.findById(parseInt(id, 10));

// //   if (!user)
// //     throw new AppError(
// //       'There is no user with that id',
// //       StatusCodes.BAD_REQUEST
// //     );

// //   await usersRepository.save({
// //     ...user,
// //     ...info,
// //   });
// // }

// // export async function deleteUserService(id: string) {
// //   const usersRepository = getCustomRepository(UserRepository);

// //   const user = await usersRepository.findById(parseInt(id, 10));

// //   if (!user)
// //     throw new AppError(
// //       'There is no user with that id',
// //       StatusCodes.BAD_REQUEST
// //     );

// //   await usersRepository.remove(user);
// // }

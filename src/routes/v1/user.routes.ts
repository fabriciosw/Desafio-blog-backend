import { Router } from 'express';
// import // createUserHandler,
// deleteUser,
// editUser,
// listUsers,
// '../../controllers/user.controller';
// import validateAdmin from '../../middlewares/validateAdmin';
// import validateUser from '../../middlewares/validateUser';
import validateResource from '../../middlewares/validateResource';
import {
  createUserSchema,
  // updateUserSchema,
  // deleteUserSchema,
} from '../../schemas/user.schema';
import createUserHandler from '../../useCases/users/createUser';

const routes = Router();

/**
 * @openapi
 *
 * '/api/v1/users/':
 *  get:
 *     tags:
 *     - Users
 *     summary: Get info from all users
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/getUsers'
 *       401:
 *         description: Invalid JWT Token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/error/InvalidJWT'
 *  post:
 *     tags:
 *     - Users
 *     summary: Create a new user
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createUser'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *           example:
 *             message: User created
 *             user:
 *              id: b0a67f4b-091a-452e-bf59-9e16f18cff5e
 *              name: Fabricio
 *              email: fabricio.seb1@gmail.com
 *              created_at: 2022-09-28T21:17:49.205Z
 *       401:
 *         description: Invalid JWT Token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/error/InvalidJWT'
 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               example: [
 *                "Name is required",
 *                "Email is required",
 *                "Password is required",
 *                'Name must have maximum 120 characters',
 *                'Email format is invalid',
 *                'Request body must be sent'
 *               ]
 *       409:
 *         description: There's already an user with that Email
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/error/DuplicatedEmail'
 * '/api/v1/users/{userId}':
 *  put:
 *     tags:
 *     - Users
 *     summary: Edit user's obs and permission
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The user's id
 *        required: true
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/editUser'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           example:
 *             message: "User updated"
 *             update:
 *              permission: false
 *              obs: "ffa"
 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               example: ["Permission is required"]
 *       401:
 *         description: Invalid JWT Token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/error/InvalidJWT'
 *  delete:
 *     tags:
 *     - Users
 *     summary: Delete user
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The user's id
 *        required: true
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       204:
 *         description: Deleted
 *       401:
 *         description: Invalid JWT Token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/error/InvalidJWT'
 */

routes
  .route('/')
  .post(validateResource(createUserSchema), (req, res, next) =>
    createUserHandler.handle(req, res, next)
  );
// .get(validateUser, listUsers);

// routes
//   .route('/:id')
//   .put([validateAdmin, validateResource(updateUserSchema)], editUser)
//   .delete([validateAdmin, validateResource(deleteUserSchema)], deleteUser);

export default routes;

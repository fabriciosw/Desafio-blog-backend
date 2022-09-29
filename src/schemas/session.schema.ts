import { object, string, InferType } from 'yup';

/**
 * @openapi
 * components:
 *   error:
 *     InvalidJWT:
 *        properties:
 *            status:
 *              type: number
 *              example: 401
 *            message:
 *              type: string
 *              example: Invalid JWT Token. / JWT Token is missing.
 *     DuplicatedEmail:
 *        properties:
 *            status:
 *              type: number
 *              example: 409
 *            message:
 *              type: string
 *              example: There's already an user with that Email
 *   schemas:
 *     getUsers:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              example: 0
 *            name:
 *              type: string
 *              example: "Fabricio"
 *            birthDate:
 *              type: string
 *              example: "2003-07-06T03:00:00.000Z"
 *            obs:
 *              type: string
 *              example: "Fullstack dev"
 *            cpf:
 *              type: string
 *              example: "111.111.111-11"
 *            permission:
 *              type: boolean
 *              example: true
 *     createUser:
 *       type: object
 *       required:
 *        - name
 *        - email
 *        - password
 *       properties:
 *         name:
 *           type: string
 *           example: "Fabricio"
 *         email:
 *           type: string
 *           example: "fabricio.seb1@gmail.com"
 *         password:
 *           type: string
 *           example: "12345"
 *     editUser:
 *       type: object
 *       required:
 *        - permission
 *       properties:
 *         obs:
 *           type: string
 *           example: "Trainne"
 *         permission:
 *           type: boolean
 *           example: false
 */

const create = {
  body: object({
    email: string()
      .defined('email is required')
      .matches(/\S+@\S+\.\S+/, 'email format is invalid'),
    password: string().defined('password is required'),
  }).defined(),
};

export const createSessionSchema = object({
  ...create,
});

export type CreateSessionInput = InferType<typeof createSessionSchema>;

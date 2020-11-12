import * as express from 'express';
import authMoiddleWare from '../../libs/routes/authMoiddleWare';

import validation  from './validation';

import validationHandler from '../../libs/routes/validationHandler';
import UserController from './Controller';
import { getUsers, getDetails } from '../constants';
const UserRouter = express.Router();

UserRouter.route('/me')
.get(authMoiddleWare(getUsers, 'all'), UserController.me)

UserRouter.route('/login')
.post( validationHandler(validation.login),UserController.login)

export default UserRouter;
import * as express from 'express';
import { authMoiddleWare } from '../../libs/routes';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';
import UserController from './Controller';
import { getUsers, getDetails } from '../../libs/constants';
import Controller from '../trainee/Controller';

const UserRouter = express.Router();

UserRouter.route('/:id')
.delete(authMoiddleWare(getDetails, 'write'), validationHandler(validation.delete), UserController.remove);

UserRouter.route('/')
.post(authMoiddleWare(getUsers, 'read'), validationHandler(validation.create), UserController.create );

UserRouter.route('/')
.put(authMoiddleWare(getUsers, 'read'), validationHandler(validation.update), UserController.update );

UserRouter.route('/me')
.get(authMoiddleWare(getUsers, 'all'),validationHandler(validation.get), UserController.me);

UserRouter.route('/login')
.post(validationHandler( validation.login ), UserController.login);

export default UserRouter;
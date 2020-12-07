import { Router } from 'express';

import validation  from './validation';

import traineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authMoiddleWare from '../../libs/routes/authMoiddleWare';
import {IUsers , IPermissions} from '../../libs/routes/Interface'; 
const  permissions : IPermissions= {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: []
        },
        'getDetails': {
          all: ['head-trainer'],
          read : ['trainee', 'trainer'],
          write : ['trainer'],
          Delete: []
          }
    }

    const  users : IUsers[] =
    [
    {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@successive.tech',
   },

    {
      traineeEmail: 'rishabh.y@successive.tech',
      reviewerEmail: 'reviewer.der@successive.tech',
   },

    {
      traineeEmail: 'trainee13@successive.tech',
      reviewerEmail: 'reviewer13@successive.tech',
    }
]
let {getUsers,getDetails}= permissions;
export {getUsers,getDetails,users}

const traineeRouter = Router();

traineeRouter.route('/')
.get(authMoiddleWare(getUsers,'read'),validationHandler(validation.get),traineeController.get)
.post(authMoiddleWare(getUsers,'write'),validationHandler(validation.create),traineeController.create)
.put(authMoiddleWare(getUsers,'all'),validationHandler(validation.update),traineeController.update)
.delete(authMoiddleWare(getUsers,'delete'),validationHandler(validation.delete),traineeController.Delete);

export default traineeRouter;
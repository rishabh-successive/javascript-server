import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import hasPermission from '../routes/Permissions';
import IRequest from '../../../src/Irequest';


import UserRepository from '../../repositories/user/UserRepository';


export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log('Inside AuthMiddleware');
        const token = req.headers.authorization;
       const secretKey  = 'qwertyuiopasdfghjklzxcvbnm123456';
       const decodeUser = jwt.verify(token, secretKey);
       const userRepository = new UserRepository();
       userRepository.findOne({ id: decodeUser.id })
        .then((userData) => {
            if(!userData) {
                throw 'User Not Found';
            }
            else if (!hasPermission(module , decodeUser.docs.role , permissionType)) {
                res.status(400).send({
                    message: 'Unauthorised Access',
                    status: 400,
                });
            }
            else{
                req.query= decodeUser.id;
                req.userDataToken = userData;
                next();
            }
        })
        .catch((err) => {
            next({
                error: 'user is not found',
                code: 400
            });
        });
    }

    catch(err) {
        next({
            error : 403,
            message: 'Unauthorised Access'
        });
        
    }
 }  

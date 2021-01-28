import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import hasPermission from '../routes/Permissions';
import IRequest from '../../../src/Irequest';


import UserRepository from '../../repositories/user/UserRepository';


export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
    console.log('Inside AuthMiddleware');
    const token = req.headers.authorization;
    console.log('token', req.headers.authorization);
    const key = "qwertyuiopasdfghjklzxcvbnm123456";
   const decodeUser = jwt.verify(token, key);
   console.log('decodedUser', decodeUser);
   const userRepository = new UserRepository();
   userRepository.findOne({ _id: decodeUser._id })
    .then((userData) => {
        if (!userData) {
            next({
                error: 'Unauthorized Access',
                message: 'User not match',
              });
        }
        else if (!hasPermission(module , decodeUser.role , permissionType)) {
            res.status(400).json({
                message: `${permissionType} Permission is not allowed.`,
            });
        }
        else {
            //req.query = decodeUser._id;
           req.userData = userData;
            next();
        }
    });
    
};

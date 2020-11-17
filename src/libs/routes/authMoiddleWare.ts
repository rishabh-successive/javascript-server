import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import hasPermission from '../routes/Permissions';
import IRequest from '../../../src/Irequest';


import UserRepository from '../../repositories/user/UserRepository';
import { config } from 'config';


// export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
//     try {
//         console.log('Inside AuthMiddleware');
//         const token = req.headers.authorization;
//        //const secretKey  = 'qwertyuiopasdfghjklzxcvbnm123456';
//        const decodeUser = jwt.verify(token, config.key);
//        console.log(decodeUser.role);
//        const userRepository = new UserRepository();
//        userRepository.findOne({ _id: decodeUser._id })
//         .then((userData) => {
//             if(!userData) {
//                 throw 'User Not Found';
//             }
//             else if (!hasPermission(module , decodeUser.role , permissionType)) {
//                 res.status(400).send({
//                     message: 'Unauthorised Access',
//                     status: 400,
//                 });
//             }
//             else{
//                 //req.query= decodeUser.id;
//                 req.userData = userData;
//                 next();
//             }
//         })
//         .catch((err) => {
//             next({
//                 error: 'user is not found',
//                 code: 400
//             });
//         });
//     }

//     catch(err) {
//         next({
//             error : 403,
//             message: 'Unauthorised Access'
//         });
        
//     }
//  }  
export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
    console.log('Inside AuthMiddleware');
    const token = req.headers.authorization;
   const decodeUser = jwt.verify(token, config.KEY);
   console.log(decodeUser.role);
   const userRepository = new UserRepository();
   userRepository.findOne({ _id: decodeUser._id })
    .then((userData) => {
        if (!userData) {
            next({
                error: 'Unauthorized Access',
                message: 'User not match',
                status: 404,
              });
        }
        else if (!hasPermission(module , decodeUser.role , permissionType)) {
            res.status(400).json({
                message: `${permissionType} Permission is not allowed.`, status: 400,
            });
        }
        else {
            //req.query = decodeUser._id;
           req.userData = decodeUser;
            next();
        }
    });
    
};

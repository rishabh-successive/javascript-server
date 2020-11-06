import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import hasPermission from '../routes/Permissions';
import IRequest from '../../../src/Irequest';


export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
       const secretKey  = 'qwertyuiopasdfghjklzxcvbnm123456';
       const decodeUser = jwt.verify(token, secretKey);
       //console.log(decodeUser)
       req.userDataToken = decodeUser ;
        console.log(req.userDataToken)
      // console.log(module,permissionType)
       // console.log('decoded user properties are ',decodeUser);
       const valOfPermission =  hasPermission(module , decodeUser.docs.role , permissionType);
       if (valOfPermission) {
        // res.send('Prop Verified');
           next();
       }


   } catch (err) {
       next({
           error : 403,
           message: 'Unauthorised Access'
       });
       
   }

};   

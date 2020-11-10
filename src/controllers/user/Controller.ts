import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel'
import IRequest  from '../../../src/Irequest';
import  userRepository  from '../../repositories/user/UserRepository';


const user = new userRepository();
class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    

    public login(req: IRequest, res: Response, next: NextFunction) {

        const { email, password } = req.body;
        console.log('Inside Login Controller');
        // console.log('Email is: ',email,'Password is :', password);
       // console.log(userModel);
        user.getUser({ email })
            .then((userData) => {
                {
                    if (!userData) {
                       next({ err: 'Not Found', status: 404, message: 'Route Not Found' });
                    }
                    const secretKey  = 'qwertyuiopasdfghjklzxcvbnm123456';
                    const createToken = jwt.sign(userData.toJSON(), secretKey);
                    // console.log(createToken);
                    res.send(createToken);
                    req.userDataToken = createToken;
                    // console.log(req.userDataToken);
                }
            });
    }
   public me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userDataToken;
        console.log(data);

        res.json(data);
        // next();
    }

   public create (req: Request, res: Response) {
        const { id, name } = req.body;
        user.create({ id, name })
            .then((data) => {
                res.status(200).send(`User Created ${data}`);
            })
   }

   public delete(req: IRequest, res: Response, next: NextFunction) {
        const id = req.params.id;
        console.log('step1');
        user.delete(id)
        .then((result) => {
            res.send({
                message: 'Deleted Successfully',
                code: 200
            });
        })
        .catch ((err) => {
            res.send({
                message: 'User not found to be deleted',
                code: 404
            });
        });
   }
    update(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside put method of Trainee');
            res.send({
                message: 'Trainee updated succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
   
}

export default UserController.getInstance();
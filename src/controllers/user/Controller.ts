import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import IRequest from '../../Irequest';
import * as bcrypt from 'bcrypt';

const user = new UserRepository();

class UserController {

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const _id = req.query;
        const user = new UserRepository();

        await user.getUser({ _id })
            .then((data) => {
                res.status(200).send({
                    message: 'User Fetched successfully',
                    'data': { data },
                    code: 200
                });
            });
    }


    // public async getAll(req: Request, res: Response, next: NextFunction) {
    //     let skip: number;
    //     let limit: number;
    //     let sort: boolean;

    //     if ('limit' in req.query) {
    //         limit = Number(req.query.limit);
    //     } else {
    //         limit = 10;
    //     }
    //     if ('skip' in req.query) {
    //         skip = Number(req.query.limit);
    //     } else {
    //         skip = 0;
    //     }
    //     if ('sort' in req.query) {
    //         sort = true;
    //     } else {
    //         sort = false;
    //     }

    //     const user = new UserRepository();
    //     await user.getallTrainee(skip, limit, sort)
    //     .then((data) => {
    //         res.status(200).send({
    //             message: 'Trainees fetched successfully',
    //             'count': data[1],
    //             'data': data
    //         });
    //     })
    //     .catch((err) => {
    //         res.send({
    //             message : 'Unable to fetch Trainees',
    //             status : 404
    //         });
    //     });
    // }
    public async getAll(req: IRequest, res: Response, next: NextFunction) {
        
        let { skip= 0 , limit= 10 , search } = req.query;

        skip = Number(skip);
       limit = Number(limit);

       let condition = { };
        if (search) {
            condition['$or'] = [{ name : search }, { email : search }];
           // console.log( new RegExp(search, "gi"));
        }
        await user.getAllUser(condition,  { limit, skip, sort : { name: -1, email: -1 } })
            .then((data) => {
                if (data.records === undefined) {
                    throw Error;
                }
                res.status(200).send({
                    status: 'ok',
                    message: 'Fetched Successfully',
                    Trainees :  { data }
                });
            })
            .catch((err) => {
                res.send({
                    message: 'Trainee not Found',
                    status: 404,
                    error: err
                });
            });
    }

    public async create(req: IRequest, res: Response, next: NextFunction) {
        const {  email, name, role, password } = req.body;
        const creator = req.userData._id;

        const user = new UserRepository();
        await user.createUser({ email, name, role, password }, creator)
            .then(() => {
                console.log("body is", req.body);
                res.send({
                    message: 'User Created Successfully!',
                    data: {
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password
                    },
                    code: 200
                });
            });
    }

    public async update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        const updator = req.userData._id;
        console.log('id',id);
        console.log('dataToUpdate',dataToUpdate);
        
        const user = new UserRepository();
        await user.updateUser( id, dataToUpdate, updator)
        .then((result) => {
            res.send({
                message: 'User Updated',
                code: 200
            });
        })
        .catch ((err) => {
            res.send({
                error: 'User Not Found for update',
                code: 404
            });
        });
    }

    public async remove(req: IRequest, res: Response, next: NextFunction) {
        const  id  = req.params.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        await user.deleteData(id, remover)
        .then((result) => {
            res.send({
                message: 'Deleted successfully',
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

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        console.log('Inside Login Controller');
        const user = new UserRepository();
        await  user.getUser({ email })
        .then((userData) => {
            { if (!userData) {
                res.status(404).send({
                    err: 'User Not Found',
                    code: 404
                });
                return;
            }
            const { password } = userData;
            const passFromBody = req.body.password;
            console.log('Hash Password is: ',password);

            if (!(bcrypt.compareSync(passFromBody, password))) {
                res.status(401).send({
                    err: 'Invalid Password',
                    code: 401
                });
                return;
            }
            const createToken = jwt.sign(userData.toJSON(), config.KEY, { expiresIn: '15m' });
            // console.log(createToken);
            res.send({
                message: 'Login Successfully',
                status: 200,
                'token': createToken
            });
           return;
            // console.log(req.userDataToken);
        }
    });
}

        

}


export default new UserController();
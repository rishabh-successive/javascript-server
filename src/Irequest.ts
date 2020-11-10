import {Request} from 'express';
export default interface IRequest extends Request {
    userData: Pick<import("/home/rishabh.yadav/Desktop/javascript-server/src/repositories/user/IUserModel").default, "_id" | "name" | "email" | "role" | "password">;
    email: any
    password: any
    userDataToken: string
}
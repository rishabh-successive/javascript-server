// import * as mongoose from 'mongoose';
// import { userModel } from './UserModel';
// import IUserModel from './IUserModel';

// export default class UserRepository {

//     public static generateObjectID() {
//         return String(mongoose.Types.ObjectId());
//     }

//     public create(data): Promise<IUserModel> {
//         console.log('UserRepository create', data);
//         const id = UserRepository.generateObjectID();
//         const model = new userModel({
//             _id: id,
//             ...data,
//        });
//         return model.save();
//     }

//     public count() {
//         return userModel.countDocuments();
//     }
// }


import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public createUser(data) {
        return super.createUser(data);
      }
      public updateUser(data) {
        return super.update(data);
      }
      public deleteData(data) {
        return super.delete(data);
      }
      public findone(data) {
        return super.findOne(data);
      }
      public countData( ) {
        return super.count( );
      }
}
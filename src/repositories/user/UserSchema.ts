//import * as mongoose from 'mongoose';
import versionableSchema from '../versionable/VersionableSchema';


class UserSchema extends versionableSchema {


    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email:String,
            role: String,
            password:String,

        });
        super(baseSchema,collections);
    }
}

export default UserSchema;
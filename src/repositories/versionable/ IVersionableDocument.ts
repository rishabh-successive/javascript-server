import * as mongoose from 'mongoose';


export default interface IVersionableDocument extends mongoose.Document{
    deleteAt: Date;
    originalId: String;
    updatedBy: string;
    createdBy: string;
    deletedBy: string;
    createAt: Date;
    
}
    
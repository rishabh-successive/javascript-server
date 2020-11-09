import * as mongoose from 'mongoose';
import { DocumentQuery , Query } from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model) {
        this.model = model;
    }

    public static generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public count() {
        return this.model.countDocuments();
    }
    public findOne(query) {
        return this.model.findOne(query).lean();
    }

    public createUser(options: any): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        const model = new this.model({
            ...options,
            _id: id,
            orignalId: id,
        });
        return model.save();
    }
    // public invalidate(id: any): DocumentQuery<D, D> {
    //     return this.model.update({ originalId: id, deletedAt: null}, { deletedAt: Date.now() });
    // }

//    public update(data: any) : Promise<D> {
//        console.log('Looking for Previous valid document');
//        const prev = this.findOne({ originalId: data.originalId,deletedAt: null});
//        console.log("Prev : ", prev);

//        if(prev) {
//            this.invalidate(data.originalId);
//        } else {
//            return null;
//        }
//        console.log('Data : ',data);
//        const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
//        console.log('New data : ',newData);
//        newData._id = VersionableRepository.generateObjectId();
//    }

    public getUser(data: any) {
        return this.model.findOne(data);
    }
}
import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    create(data: any) {
      throw new Error('Method not implemented.');
    }
    private model: M;

    constructor(model) {
        this.model = model;
    }

    public static generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public async count(query: object) {
        return await this.model.countDocuments({deletedAt: undefined, ...query});
    }

    public async findOne(query: object) {
        return await this.model.findOne(query).lean();
    }

    public async createUser(data: any, creator): Promise<D> {
        const id = VersionableRepository.generateObjectId();

        const modelData = {
            ...data,
            originalId: id,
            createdBy: creator,
            _id: id,
        };

        return await this.model.create(modelData);
    }

    public async getUser(data: any) {
        return await this.model.findOne(data);
    }

    // public async getallTrainee(skipDefined: number, limitDefined: number, sort: boolean) {
    //     if ( sort ) {
    //     const fetchData = await this.model.find( { deletedAt : null})
    //     .skip(skipDefined)
    //     .limit(limitDefined)
    //     .sort({name: 1, email: 1});
    //     const count = await this.model.find( {deletedAt: null})
    //     .countDocuments();

    //     const arr = [fetchData, count];
    //     return arr;
    //     } else {
    //         const fetchData = await this.model.find({deletedAt: null})
    //         .skip(skipDefined)
    //         .limit(limitDefined)
    //         .sort({createdAt: -1});
    //         const count = await this.model.find({deletedAt: null})
    //         .countDocuments();
    //         const arr = [fetchData, count];
    //         return arr;
    //     }
    //     }
    public getAll(query: any = {}, projection: any = {}, options: any = {}) {

        const finalQuery = { deletedAt: undefined, ...query };

         const { limit = 0, skip = 0, ...restOption } = options;

        return this.model.find(finalQuery, projection, restOption).skip(skip).limit(limit);
    }

    public async update(id: string, dataToUpdate: any, updator) {

        let originalData;
        await this.findOne({ _id: id, updatedAt: null, deletedAt: null })
            .then((data) => {
                if (data === null) {
                    throw '';
                }
                originalData = data;
                const newId = VersionableRepository.generateObjectId();
                const oldId = originalData._id;
                const oldModel = {
                    ...originalData,
                    updatedAt: Date.now(),
                    updatedBy: updator,
                    deletedAt: Date.now(),
                    deletedBy: updator,
                };

                const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), dataToUpdate);

                newData._id = newId;
                newData.createdAt = Date.now();

                this.model.updateOne({ _id: oldId }, oldModel)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                    });

               return this.model.create(newData);


            });
    }

    public async delete(id: string, remover: string) {

        let originalData;

        await this.findOne({ _id: id, deletedAt: null })
            .then((data) => {
                if (data === null) {
                    throw '';
                }

                originalData = data;
                const oldId = originalData._id;

                const modelDelete = {
                    ...originalData,
                    deletedAt: Date.now(),
                    deletedBy: remover,
                };

                this.model.updateOne({ _id: oldId }, modelDelete)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                    });

            });
    }
}
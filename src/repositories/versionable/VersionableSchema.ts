import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
  constructor(option: any, collection: any) {
    const versionable = Object.assign({
      ...option,
      createdAt: {
        default: Date.now,
        required: true,
        type: Date,
      },
      deletedAt: {
        required: false,
        default: null,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
      updatedAt: {
        required: false,
        default: null,
        type: Date,
      },
      updatedBy: {
        required: false,
        default: null,
        type: String,
      },
      createdBy: {
        required: false,
        default: null,
        type: String,
      },
      deletedBy: {
        required: false,
        default: null,
        type: String,
      },
    });
    super(versionable, collection);
  }
}
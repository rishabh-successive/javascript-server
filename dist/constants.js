"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.getDetails = exports.getUsers = void 0;
const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: []
    },
    'getDetails': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: []
    }
};
const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'prince.gola@successive.tech',
        reviewerEmail: 'reviewer.der@successive.tech',
    },
    {
        traineeEmail: 'trainee13@successive.tech',
        reviewerEmail: 'reviewer13@successive.tech',
    }
];
exports.users = users;
let { getUsers, getDetails } = permissions;
exports.getUsers = getUsers;
exports.getDetails = getDetails;
//# sourceMappingURL=constants.js.map
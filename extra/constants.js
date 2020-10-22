const  permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: [],
        }
    }

    let users =
    [
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
]
let {getUsers,getDetails}= permissions;
export {getUsers,getDetails,users}
const config = {
  create: {
     
      name: {
          required: true,
          regex: '',
          in: ['body'],
          errorMessage: 'Name is required'
      },
      email: {
          required: true,
          regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
          in: ['body'],
          errorMessage: 'Email is required'
      },
      role: {
          required: true,
          string: true,
          in: ['body'],
          errorMessage: 'Role is required'
      },
      password: {
          required: true,
          string: true,
          in: ['body'],
          errorMessage: 'Password is required'
      }
  },

  delete: {
      id: {
          required: true,
          string: true,
          errorMessage: 'Id is required',
          in: ['params']
      }
  },

  get: {
      email: {
          required: true,
          
          
          in: ['query'],
          errorMessage: 'email is invalid'
      },
      password: {
          required: true,
    
          
          in: ['query'],
          errorMessage: 'Limit is invalid'
      },

      sort: {
        required: false,
        boolean: true,
        in: ['query'],
        errorMessage: 'Sort is invalid',
    }
  },

  update: {
      id: {
          required: true,
          string: true,
          in: ['body']
      },
      dataToUpdate: {
          in: ['body'],
          required: true,
          isObject: true,
          custom: (dataToUpdate) => { return; }
      }
  },

  login: {
      email: {
          required: true,
          regex: '',
          in: ['body'],
          errorMessage: 'Email is required'
      },
      password: {
          required: true,
          string: true,
          in: ['body'],
          errorMessage: 'Password is required'
      },
    }
};

export default config;                                   
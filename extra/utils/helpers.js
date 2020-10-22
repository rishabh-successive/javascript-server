export default function validateEmail (email) 
    {
      const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ // email validation 
      return (reg.test(email))
    } 
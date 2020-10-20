let users =
  [
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
 },
  {
    traineeEmail: 'trainee12successive.tech',
    reviewerEmail: 'reviewer12@successive.tech',
 },
  {
    traineeEmail: 'trainee13@successive.tech',
    reviewerEmail: 'reviewer13@successive.tech',
 }
  ]
    

    function validateEmail (email) 
    {
      const reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/
      if (reg.test(email)){
        return true;
      }
      else{
        return false;
      }
    } 
    
    /*function ValidateUsers (users){
      for (let i=0;i<=users.length;i++)
      {
        Object.users(users[i]);
      }
      */
     
     
     function ValidateUsers (users)
     {
        let valid=0;
        let invalid=0;
            //console.log(users);
            users.forEach(({traineeEmail , reviewerEmail})=>{if((validateEmail(traineeEmail))) {valid++} else invalid++});
            
            
            console.log(`invalid ${invalid}`);
            console.log(`valid ${valid}`);
          }


        ValidateUsers(users);

        // for(var a=0;a<4;a++)
        // {
        //   console.log(a);
        // }
        // console.log(a);

    
  
          




    








 


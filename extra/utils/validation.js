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
    

    function validateEmail (email) 
    {
      const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ // email validation 
      return (reg.test(email))
    } 
    
    /*function ValidateUsers (users){
      for (let i=0;i<=users.length;i++)
      {
        Object.users(users[i]);
      }
      */
     
     
     function ValidateUsers (users)
     {
         valid=0;
         invalid=0;
            //console.log(users);
            users.forEach(({traineeEmail , reviewerEmail })=>
            {
              if(validateEmail(traineeEmail)&&validateEmail(reviewerEmail)) {
                valid++
              } else 
              invalid++
            }); 
          }


        ValidateUsers(users);
        console.log(`invalid ${invalid}`); // invalid email with count
            console.log(`valid ${valid}`); // valid email with count

        // for(var a=0;a<4;a++)
        // {
        //   console.log(a);
        // }
        // console.log(a);

    
  
          




    








 


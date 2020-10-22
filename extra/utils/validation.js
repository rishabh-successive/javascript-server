
     
     import validateEmail from './helpers.js'
     export default function ValidateUsers (users)
     {
        let  valid=0;
         let invalid=0;
            //console.log(users);
            users.forEach(({traineeEmail , reviewerEmail })=>
            {
              if(validateEmail(traineeEmail)&&validateEmail(reviewerEmail)) {
                valid++
                
              } else {
              invalid++
              }
              
            }); 
            console.log(`valid ${valid}`);
              console.log(`invalid ${invalid}`);
          }


        //ValidateUsers(users);
        // console.log(`invalid ${invalid}`); // invalid email with count
        //     console.log(`valid ${valid}`); // valid email with count

        // for(var a=0;a<4;a++)
        // {
        //   console.log(a);
        // }
        // console.log(a);

    
  
          




    








 


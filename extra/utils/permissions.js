const  permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: [],
        }
    }



 function hasPermission(moduleName,role,permissionType){
    const {all,read,write,Delete={}} = moduleName;

    let f = all.includes(role);

    if(f==true){
        return true;
    }
    else{
        if(permissionType== "read"){
            f =read.includes(role);
            return f;
        }else if (permissionType == "write"){
            f = write.includes(role);
            return f;
        }else if (permissionType == "Delete"){
            f =Delete.includes(role);
            return f;
        }
    }

 }
 let {getUsers,getDetails}= permissions;

 console.log(hasPermission(getUsers,"trainer","Delete"));
 console.log(hasPermission(getUsers,"trainer","write"));
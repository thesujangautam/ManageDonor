export const isValidUser = (user)=>{
    if(!/^[a-zA-Z]{2,20}$/.test(user.firstname)){
        return false;
    } else if(!/^[a-zA-Z]{2,20}$/.test(user.lastname)){
        return false;
    }else if(!/\S+@\S+\.\S+/.test(user.email)){
        return false;
    }

    return true;
}
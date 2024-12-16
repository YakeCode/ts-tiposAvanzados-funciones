import { ROLES, User } from '../tipos/2-enums'

const currentUser:User = {
  username: 'Yake',
  role : ROLES.ADMIN
};

export const checkAdminRole = ()=> {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  }
  return false;
}

const rta = checkAdminRole()
 console.log('checkAdminRole :', rta) // true

///

export const checkRole = (role:ROLES)=>{
  if (role === ROLES.ADMIN){
    return 'Is admin'
  }else if(role === ROLES.CUSTOMER){
    return 'Is customer';
  }else if(role === ROLES.SELLER){
    return 'Is seller';
  }else{
    return 'Is user';
  }
}

// Rest

export const checkRoleRest = ( ...roles: ROLES[] ) =>{
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;

}

const rta2 = checkRoleRest(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);

console.log('checkRoleRest', rta2);


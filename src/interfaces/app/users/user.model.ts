export enum Roles {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer'
}

export interface User {
  id : string | number;
  username : string;
  role : Roles;
}

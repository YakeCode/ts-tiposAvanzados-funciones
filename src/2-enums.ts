enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = "customer",
  USER = 'user',
}

type User = {
  username: string
  role : ROLES
}

const yakeUser:User = {
  username: 'Yake',
  role: ROLES.ADMIN,
}

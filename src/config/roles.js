const allRoles = {
  user: ['getUser', 'manageUsers', 'wishlist', 'cart'],
  admin: [
    'getUsers',
    'getUser',
    'createUser',
    'deleteUser',
    'manageUsers',
    'manageCategory',
    'manageProduct',
    'wishlist',
    'cart',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

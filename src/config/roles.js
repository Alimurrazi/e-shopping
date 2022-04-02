const allRoles = {
  user: ['getUser', 'manageUsers', 'wishlist'],
  admin: ['getUsers', 'getUser', 'createUser', 'deleteUser', 'manageUsers', 'manageCategory', 'manageProduct', 'wishlist'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

const allRoles = {
  user: ['wishlist'],
  admin: ['getUsers', 'manageUsers', 'manageCategory', 'manageProduct', 'wishlist'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

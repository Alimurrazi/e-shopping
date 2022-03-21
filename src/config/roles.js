const allRoles = {
  user: ['getCategory'],
  admin: ['getUsers', 'manageUsers', 'getCategory', 'addCategory', 'updateCategory', 'deleteCategory'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

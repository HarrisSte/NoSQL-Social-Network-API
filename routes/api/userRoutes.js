const router = require('express').Router();

//Functions that were created in the userController.js.
const {
  getUsers,
  getUserById,
  newUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

//route: /api/users
router.route('/').get(getUsers).post(newUser);

//route: /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

//route: /api/users/:userId/friends/friendId
//Need to finish this up.

module.exports = router;

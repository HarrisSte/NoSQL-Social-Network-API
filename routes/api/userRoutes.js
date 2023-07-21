const router = require('express').Router();

//Functions that were created in the userController.js.
const {
  getUsers,
  getUser,
  newUser,
  updateUser,
  deleteUser,
  //   addFriend,
  //   deleteFriend,
} = require('../../controllers/userController');

//route: /api/users
router.route('/').get(getUsers).post(newUser);

//route: /api/users/:userId
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

//route: /api/users/:userId/friends/friendId
//Need to finish this up.
// router.route('/:userid/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;

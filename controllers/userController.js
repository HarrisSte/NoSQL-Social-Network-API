const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  //Getting all users.
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: 'thoughts', select: '__v' })
        .populate({ path: 'friends', select: '__v' });
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json.err;
    }
  },
  //Getting a single user by their ID.
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: 'thoughts', select: '__v' })
        .populate({ path: 'friends', select: '__v' });
    } catch (err) {}
  },
  //Posting a new user.
  async newUser(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json.err;
    }
  },
  //Updating a user.
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { __id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res
          .status(404)
          .json({ message: 'Oops, there is no user with this ID!' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  //Deleting a user.
  //BONUS: Try to remove a user's associated thoughts when deleted.
};

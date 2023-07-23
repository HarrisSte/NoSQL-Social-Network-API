// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const userController = {
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
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: 'thoughts', select: '__v' })
        .populate({ path: 'friends', select: '__v' });

      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //POST: Creating a new user.
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Updating a user.
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res
          .status(404)
          .json({ message: 'Oops, there is no user with this ID!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Deleting a user.
  //BONUS: Try to remove a user's associated thoughts when deleted.
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'Oops, no such user exists.' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //Adding a friend
  
  //Deleting a friend
  
};

module.exports = userController;

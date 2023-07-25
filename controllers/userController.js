// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const userController = {
  //Getting all users.
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: 'thoughts', select: 'text createdAt' })
        .populate({ path: 'friends', select: '__v' });
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
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
      return res
        .status(500)
        .json({ message: 'Unable to access this information.' });
    }
  },

  //POST: Creating a new user.
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json({ message: 'Unable to create new user.' });
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
        return res
          .status(404)
          .json({ message: 'Oops, there is no user with this ID!' });
      }
      res.json({ message: 'User has been updated successfully!' });
    } catch (err) {
      res.status(500).json({ error: err.message });
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
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  },

  //Adding a friend
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res
          .status(404)
          .json({ message: 'There is no user with that ID.' });
      }

      return res.status(200).json({ message: 'Friend added successfully!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  //Deleting a friend
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: 'Check user and friend ID' });
      }

      return res.status(200).json({ message: 'Friend successfully deleted!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

module.exports = userController;

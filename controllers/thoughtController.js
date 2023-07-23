const { User, Thought } = require('../models');

module.exports = {
  //Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      return res.status(200).json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select('__v');
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      return res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500)(err);
    }
  },

  //Create thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res
          .status(404)
          .json({ message: 'Oops, there is no thought with this ID!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Delete thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({
        _id: req.params.userId,
      });

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'Oops, no such thought exists.' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  //Add reaction
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        res
          .status(404)
          .json({ message: 'Oops, there is no thought with this ID!' });
      }
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Delete reaction
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndRemove({
        _id: req.params.userId,
      });

      if (!reaction) {
        return res
          .status(404)
          .json({ message: 'Oops, no such thought exists.' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

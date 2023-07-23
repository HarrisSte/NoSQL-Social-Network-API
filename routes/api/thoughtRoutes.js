const router = require('express').Router();

//Functions that were created in the thoughtController.js
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/userController');

//route: /api/thoughts
router.route('/').get(getThoughts).post(createThought);

//route: /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//route: /api/thoughts/:thoughtId/reactions
router.route('/thoughtId/reactions').post(addReaction);

//route: /api/thought/:thoughtId/reactions/:reactionId
router.route('/:thoughtid/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

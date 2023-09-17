const router = require('express').Router();
const {
  getAllThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addResponse,
  removeResponse,
} = require('../../controllers/thoughtController');

// /api/videos
router.route('/').get(getAllThought).post(createThought);

// /api/videos/:videoId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:videoId/responses
router.route('/:thoughtId/responses').post(addResponse);

// /api/videos/:videoId/responses/:responseId
router.route('/:thoughtId/responses/:responseId').delete(removeResponse);

module.exports = router;

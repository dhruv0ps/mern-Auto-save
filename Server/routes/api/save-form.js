// routes/api/form.js

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Form = require('../../models/Form');

// @route   POST /api/form
// @desc    Save form data
// @access  Private
router.post('/', auth, async (req, res) => {
  const { field1 } = req.body;
console.log(field1);
  try {
    // Find the form data for the user, if it exists
    let form = await Form.findOne({ userId: req.user.id });

    if (form) {
      // Update existing form data
      form.field1 = field1;
      
      form.updatedAt = Date.now();
    } else {
      // Create new form data
      form = new Form({
        userId: req.user.id,
        field1,
        
      });
    }

    // Save the form data
    await form.save();
    res.json(form);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

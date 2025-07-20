const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
   const { firstName, lastName, email, message, contact } = req.body;

    // === Validation ===
    if (!contact || contact.length !== 10 || !/^\d{10}$/.test(contact)) {
      return res.status(400).json({ message: 'Invalid contact number. It must be exactly 10 digits.' });
    }

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email. It must contain "@"' });
    }

    const newContact = new Contact({ firstName, lastName, email, message, contact });
    await newContact.save();

    res.status(200).json({ message: 'Contact saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

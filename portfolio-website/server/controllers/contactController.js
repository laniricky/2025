const ContactMessage = require('../models/ContactMessage');

exports.sendMessage = async (req, res) => {
  const newMessage = new ContactMessage(req.body);
  await newMessage.save();
  res.json({ success: true });
};

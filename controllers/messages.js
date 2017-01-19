/**
 * GET /messages
 * List unprocessed messages.
 */
const Message = require('../models/Message.js');

exports.getMessages = (req, res) => {
  Message.scan(100).exec(function (err, docs) {
    res.render('messages', { messages: docs });
  });
};

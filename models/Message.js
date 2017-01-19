const dynamoose = require('dynamoose');

const messageSchema = new dynamoose.Schema({
  id: Number,
  name: String
});

const Message = dynamoose.model('Message', messageSchema);
module.exports = Message;

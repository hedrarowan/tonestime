const db = require('./databse')
const Author = require('./Author')
const Message = require('./Message')

Message.belongsTo(Author)

Author.belongsToMany(Message)

module.exports = {
    db,
    Author,
    Message
}
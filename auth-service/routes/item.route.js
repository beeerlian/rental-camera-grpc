const middleware = require('../middleware')
const services = require('../services')
const item = services.item;

module.exports = function (app) {
       app.get('/item', [middleware.token.verify,], item.getAll)
       app.post('/item', [middleware.token.verify, middleware.role.ban.customer], item.create)
       app.get('/item/:id', [middleware.token.verify], item.get)
       app.delete('/item/:id', [middleware.token.verify, middleware.role.ban.customer], item.delete)
       app.put('/item/:id', [middleware.token.verify, middleware.role.ban.customer], item.update)
}

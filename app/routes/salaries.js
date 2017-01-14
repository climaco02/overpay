module. exports = function (app) {
  app.get('/', function (req, res) {
    var info = require('../list/list')()

    res.render ('index', {info})
    // res.send(info)

    // var list = require('../list/relatorio.json')
    // res.send(list)
  })
}

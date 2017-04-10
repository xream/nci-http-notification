const inherits = require('util').inherits
const axios = require('axios')

exports.register = function(app) {
  const ParentTransport = app.lib.notifier.BaseNotifierTransport

  function Transport() {
    ParentTransport.call(this)
  }

  inherits(Transport, ParentTransport)

  Transport.prototype.init = function(params, callback) {
    this.conf = params
    callback()
  }

  Transport.prototype.send = async function(params, callback) {
    const conf = params.build.project.notify.to.http(params)
    try {
      await axios({ ...this.conf, ...conf })
      callback()
    } catch (e) {
      callback(e)
    }
  }
  app.lib.notifier.register('http', Transport)
}

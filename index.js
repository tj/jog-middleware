
/**
 * Log incoming requests and responses with the given `log` instance.
 *
 * @param {Object} log
 * @return {Function}
 * @api public
 */

module.exports = function(log){
  var ids = 0;

  return function(req, res, next){
    var id = ids++;
    var start = new Date;

    log.info('request', {
      url: req.url,
      method: req.method,
      header: req.headers,
      id: id
    });

    res.on('finish', function(){
      log.info('response', {
        url: req.url,
        method: req.method,
        status: res.statusCode,
        header: res._headers,
        duration: new Date - start,
        id: id
      })
    });

    next();
  }
};
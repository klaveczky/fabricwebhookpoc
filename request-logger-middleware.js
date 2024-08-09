module.exports = function requestLogger(req, _res, next) {
  console.info(
    `[${new Date().toISOString()}][REQUEST] ${req.method} ${
      req.url
    } ${JSON.stringify(req.query)} from '${req.ip}'\n
    [HEADERS]: ${JSON.stringify(req.headers)}\n
    [BODY]: ${JSON.stringify(req.body)}`
  )
  return next()
}

export function auth(req, res, next) {
  const token = req.headers.authorization.split(' ')[1]
  req.headers.token = token
  res.status(200)
  next()
}

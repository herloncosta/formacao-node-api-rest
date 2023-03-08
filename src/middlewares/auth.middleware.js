import { verify } from 'jsonwebtoken'

export function auth(req, res, next) {
  const authToken = req.headers.authorization

  if (authToken) {
    const token = req.headers.authorization.split(' ')[1]

    verify(token, process.env.JWTSECRET, (error, data) => {
      if (error) {
        res.status(401).json({ message: 'Token inválido!' })
      } else {
        req.token = token
        req.loggedUser = { id: data.id, email: data.email }
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'Token inválido!' })
  }
}

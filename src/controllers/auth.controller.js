import jwt from 'jsonwebtoken'
import { fakeDB } from '../database/fakeDB.js'

export const auth = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({ message: 'E-mail e/ou senha inválidos!' })
    return
  }

  const user = fakeDB.users.find((user) => user.email === email)

  if (!user) {
    res.status(404).json({ message: 'Usuário não encontrado!' })
    return
  }

  if (user.password === password) {
    const payload = { id: user.id, email: user.email }
    const secret = process.env.JWTSECRET
    const timeToTokenExpires = { expiresIn: '48h' }
    const generateToken = (error, token) => {
      error
        ? res.status(500).json({ message: error })
        : res.status(200).json(token)
    }

    jwt.sign(payload, secret, timeToTokenExpires, generateToken)
    return
  }

  res.status(401).json({ message: 'Usuário não autorizado.' })
}

import { Router } from 'express'
import {
  getAll,
  getById,
  create,
  remove,
  update,
  auth,
} from './src/controllers/game.controller.js'

export const router = Router()

router.get('/api/games', getAll)
router.get('/api/game/:id', getById)
router.post('/api/game', create)
router.delete('/api/game/:id', remove)
router.put('/api/game/:id', update)
router.post('/api/auth', auth)

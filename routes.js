import { Router } from 'express'
import {
  getAll,
  getById,
  create,
  remove,
  update,
} from './src/controllers/game.controller.js'
import { auth as authController } from './src/controllers/auth.controller.js'
import { auth as authMiddleware } from './src/middlewares/auth.middleware.js'

export const router = Router()

router.get('/api/games', authMiddleware, getAll)
router.get('/api/game/:id', authMiddleware, getById)
router.post('/api/game', authMiddleware, create)
router.delete('/api/game/:id', authMiddleware, remove)
router.put('/api/game/:id', authMiddleware, update)
router.post('/api/auth', authController)

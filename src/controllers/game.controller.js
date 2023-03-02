import { randomUUID } from 'node:crypto'

import { fakeDB } from '../database/fakeDB.js'

const getAll = (req, res) => res.status(200).json(fakeDB)

const getById = (req, res) => {
  const id = String(req.params.id)
  const game = fakeDB.games.find((game) => game.id === id)

  if (game) {
    res.status(200).json(game)
    return
  }

  res.status(404).json({ message: 'Game not found!' })
}

const create = (req, res) => {
  const id = randomUUID()
  const { title, genres, price } = req.body

  if (title && genres && price) {
    const game = { id, title, genres, price }
    fakeDB.games.push(game)
    res.status(201).json({ message: 'Game created with success!' })
    return
  }

  res
    .status(400)
    .send({ message: 'title and genres are mandatory parameters.' })
}

const remove = (req, res) => {
  const id = String(req.params.id)
  const index = fakeDB.games.findIndex((game) => game.id === id)

  if (index === -1) {
    res.status(404).json({ message: 'Game not found!' })
    return
  }

  fakeDB.games.splice(index, 1)
  res.status(200).send({ message: 'Game removed with success.' })
}

const update = (req, res) => {
  const id = String(req.params.id)
  const { title, genre, price } = req.body
  const index = fakeDB.games.findIndex((game) => game.id === id)

  if (index === -1) {
    res.status(404).json({ message: 'Game not found!' })
    return
  }

  if (title && genre && price) {
    const game = fakeDB.games.find((game) => game.id === id)
    const updated = { id: game.id, title, genre, price }
    fakeDB.games.splice(index, 1, updated)
    res.status(201).json({ message: 'Game updated with success.' })
    return
  }

  res.status(401).json({ message: 'title and genres are mandatory parameter!' })
}

export { getAll, getById, create, remove, update }

import express, { json, urlencoded } from 'express'
import { router } from './routes.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(json())
app.use(urlencoded({ extended: false }))

app.use(router)

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/api/`)
)

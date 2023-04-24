import dotenv from 'dotenv'
dotenv.config()
import { env } from './utilities/envParser'
import express from 'express'
import cors from 'cors'
import fs from 'fs'
import { z } from 'zod'
import validateRequest from './middlewares/validateRequest'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Zod schemas and TS types
const reqSchema = z.object({
  number: z.string()
})
type reqType = z.infer<typeof reqSchema>

// Routes

app.put('/api/memory-add', validateRequest(reqSchema), (req, res) => {
  try {
    const reqData = req.body as reqType
    const dataToSave = JSON.stringify(reqData)
    fs.writeFileSync('db.json', dataToSave, 'utf-8')
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

app.get('/api/memory-read', (req, res) => {
  try {
    const db = fs.readFileSync('db.json', 'utf-8')
    const dataToSend = JSON.parse(db)
    res.json(dataToSend)
  } catch (err) {
    res.sendStatus(500)
  }
})

app.listen(env.PORT, () => {
  console.log(`⚡️ Server is listening at port ${env.PORT}`)
})

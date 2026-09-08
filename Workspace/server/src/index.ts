import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('TODO Web App - Server Live')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

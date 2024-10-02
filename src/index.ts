import express, { type Application, type Request, type Response } from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number = Number(process.env.PORT) || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

import { Router } from 'express'
import barangRouter from './barang.route'
import userRouter from './user.route'
import { errorController, notFound } from '../controllers/error.controller'

const app = Router()
// http://localhost:3000/api/barang
app.use('/api', barangRouter)
app.use('/api', userRouter)

app.use('*', errorController)
app.use('*', notFound)
export default app

import { Router } from 'express'
import {
  getAllBarang,
  getDataById,
  inputBarang
} from '../controllers/barang.controller'
import expressAsyncHandler from 'express-async-handler'
const barangRouter = Router()

barangRouter.get('/barang', expressAsyncHandler(getAllBarang))
barangRouter.get('/barang/:id', expressAsyncHandler(getDataById))
barangRouter.post('/barang', expressAsyncHandler(inputBarang))

export default barangRouter

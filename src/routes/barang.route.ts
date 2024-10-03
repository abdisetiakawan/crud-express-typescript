import { Router } from 'express'
import {
  getAllBarang,
  getDataById,
  inputBarang,
  updateDataBarang
} from '../controllers/barang.controller'
import expressAsyncHandler from 'express-async-handler'
const barangRouter = Router()

barangRouter.get('/barang', expressAsyncHandler(getAllBarang))
barangRouter.get('/barang/:id', expressAsyncHandler(getDataById))
barangRouter.post('/barang', expressAsyncHandler(inputBarang))
barangRouter.put('/barang/:id', expressAsyncHandler(updateDataBarang))

export default barangRouter

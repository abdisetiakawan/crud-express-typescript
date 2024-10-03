import { Router } from 'express'
import {
  deleteDataBarang,
  getAllBarang,
  getDataById,
  inputBarang,
  updateDataBarang
} from '../controllers/barang.controller'
import expressAsyncHandler from 'express-async-handler'
import { authenticate } from '../controllers/error.controller'
const barangRouter = Router()

barangRouter.get('/barang', authenticate, expressAsyncHandler(getAllBarang))
barangRouter.get('/barang/:id', authenticate, expressAsyncHandler(getDataById))
barangRouter.post('/barang', authenticate, expressAsyncHandler(inputBarang))
barangRouter.put(
  '/barang/:id',
  authenticate,
  expressAsyncHandler(updateDataBarang)
)
barangRouter.delete(
  '/barang/:id',
  authenticate,
  expressAsyncHandler(deleteDataBarang)
)

export default barangRouter

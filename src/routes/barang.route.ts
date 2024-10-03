import { Router } from 'express'
import { getAllBarang, inputBarang } from '../controllers/barang.controller'
const barangRouter = Router()

barangRouter.get('/barang', getAllBarang)

barangRouter.post('/barang', inputBarang)

export default barangRouter

import { type Request, type Response, Router } from 'express'
import { inputBarangValidation } from '../validations/barang.validation'
const barangRouter = Router()

barangRouter.get('/barang', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World'
  })
})

barangRouter.post('/barang', (req: Request, res: Response) => {
  const { error, value } = inputBarangValidation(req.body)
  if (error) {
    res.status(400).json({
      error: error.details[0].message,
      message: 'Input Data Gagal',
      data: value
    })
  }

  res.status(200).json({
    error: null,
    message: 'Input Data Berhasil',
    data: value
  })
})

export default barangRouter

import { type NextFunction, type Request, type Response } from 'express'
import { inputBarangValidation } from '../validations/barang.validation'

export const getAllBarang = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    const data = [
      {
        id: 1,
        nama: 'Buku',
        jumlah: 10,
        harga: 10000
      },
      {
        id: 2,
        nama: 'Pensil',
        jumlah: 5,
        harga: 5000
      },
      {
        id: 3,
        nama: 'Penghapus',
        jumlah: 20,
        harga: 2000
      }
    ]

    return res.status(200).json({
      error: null,
      message: 'Get All Barang Berhasil',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error when get all barang pada file /src/controllers/barang.controller.ts: ' +
          error.message
      )
    )
  }
}

export const inputBarang = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    const { error, value } = inputBarangValidation(req.body)
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Input Data Gagal',
        data: value
      })
    }

    return res.status(201).json({
      error: null,
      message: 'Input Data Berhasil',
      data: value
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error when input data pada file /src/controllers/barang.controller.ts: ' +
          error.message
      )
    )
  }
}

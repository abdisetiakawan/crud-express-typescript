import { type NextFunction, type Request, type Response } from 'express'
import { inputBarangValidation } from '../validations/barang.validation'
import {
  createBarang,
  getBarang,
  getBarangById
} from '../services/barang.service'

export const getAllBarang = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await getBarang()
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

export const getDataById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const data = await getBarangById(Number(id))
    return res.status(200).json({
      error: null,
      message: 'Get Data Berhasil',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error when get data by id pada file /src/controllers/barang.controller.ts: ' +
          error.message
      )
    )
  }
}

export const inputBarang = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { error, value } = inputBarangValidation(req.body)
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Input Data Gagal',
        data: value
      })
    }
    const data = await createBarang(value)
    return res.status(201).json({
      error: null,
      message: 'Input Data Berhasil',
      data: data
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

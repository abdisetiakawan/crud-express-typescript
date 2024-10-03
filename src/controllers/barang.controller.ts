import { type NextFunction, type Request, type Response } from 'express'
import { inputBarangValidation } from '../validations/barang.validation'
import {
  createBarang,
  deleteBarang,
  getBarang,
  getBarangById,
  updateBarang
} from '../services/barang.service'

export const getAllBarang = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const data = await getBarang()
    return res.status(200).json({
      error: null,
      message: 'Get All Barang Berhasil',
      data
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when get all barang pada file /src/controllers/barang.controller.ts: get all data - ' +
          String((error as Error).message)
      )
    )
  }
}

export const getDataById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { id } = req.params
    const data = await getBarangById(Number(id))
    return res.status(200).json({
      error: null,
      message: 'Get Data Berhasil',
      data
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when get data by id pada file /src/controllers/barang.controller.ts: get data by id - ' +
          String((error as Error).message)
      )
    )
  }
}

export const inputBarang = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
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
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when input data pada file /src/controllers/barang.controller.ts: create barang - ' +
          String((error as Error).message)
      )
    )
  }
}

export const updateDataBarang = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { id } = req.params
    const { error, value } = inputBarangValidation(req.body)
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Update Data Gagal',
        data: value
      })
    }
    const data = await updateBarang({ ...value, id: Number(id) })
    return res.status(200).json({
      error: null,
      message: 'Update Data Berhasil',
      data
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when update data pada file /src/controllers/barang.controller.ts: update data - ' +
          String((error as Error).message)
      )
    )
  }
}

export const deleteDataBarang = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { id } = req.params
    const data = await deleteBarang(Number(id))
    return res.status(200).json({
      error: null,
      message: 'Delete Data Berhasil',
      data
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when delete data pada file /src/controllers/barang.controller.ts: delete data - ' +
          String((error as Error).message)
      )
    )
  }
}

import { Router, type Request, type Response, type NextFunction } from 'express'
import {
  deleteDataBarang,
  getAllBarang,
  getDataById,
  inputBarang,
  updateDataBarang
} from '../controllers/barang.controller'
import { authenticate } from '../controllers/error.controller'

const barangRouter = Router()

barangRouter.get(
  '/barang',
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next)
  },
  (req: Request, res: Response, next: NextFunction) => {
    getAllBarang(req, res, next)
  }
)

barangRouter.get(
  '/barang/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next)
  },
  (req: Request, res: Response, next: NextFunction) => {
    getDataById(req, res, next)
  }
)

barangRouter.post(
  '/barang',
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next)
  },
  (req: Request, res: Response, next: NextFunction) => {
    inputBarang(req, res, next)
  }
)

barangRouter.put(
  '/barang/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next)
  },
  (req: Request, res: Response, next: NextFunction) => {
    updateDataBarang(req, res, next)
  }
)

barangRouter.delete(
  '/barang/:id',
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next)
  },
  (req: Request, res: Response, next: NextFunction) => {
    deleteDataBarang(req, res, next)
  }
)

export default barangRouter

import express, { type Application } from 'express'
import 'dotenv/config'
import appMiddleware from '../middleware'

const web: Application = express()

web.use(appMiddleware)

export default web

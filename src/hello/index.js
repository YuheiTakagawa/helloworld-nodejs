import express from 'express'
import a from './hello'

export const router = express.Router()

router
    .get('/', a.simple)
    .get('/hello', a.hello)
    .post('/world', a.world)

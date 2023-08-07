import {Router} from 'express'
import { getClients, getClient, createClient, updateClient, deleteClient } from '../controllers/clients.controller.js'

const router = Router()

router.get('/clients', getClients)
router.get('/clients/:rut', getClient)
router.post('/clients', createClient)
router.put('/clients/:rut', updateClient)
router.delete('/clients/:rut', deleteClient)

export default router
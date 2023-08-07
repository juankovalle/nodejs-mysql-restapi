import express from 'express'
import employeesRoutes from './routes/employees.routes.js' 
import indexRoutes from './routes/index.routes.js'
import clientsRoutes from './routes/clients.routes.js'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/api', employeesRoutes)
app.use('/api', clientsRoutes)
app.use('/api', indexRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;
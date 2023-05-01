import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

const app = express()

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

// Definir puertos
const port = process.env.PORT || 4000

// Habilitar pug
app.set('view engine', 'pug')

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreAgencia = 'MC Travels'
    return next()
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }))

// Agregar el router
app.use('/', router)

// Definir la carpeta publica
app.use(express.static('public'))

app.use('/viajes', express.static('public'));

app.listen(port, () => {
    console.log(`El seridor esta funcionando en el puerto ${port}`)
})
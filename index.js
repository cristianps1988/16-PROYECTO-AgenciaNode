import express from 'express'
import router from './routes/index.js'

const app = express()

// Definir puertos
const port = process.env.PORT || 4000

// Agregar el router
app.use('/', router)

// Habilitar pug
app.set('view engine', 'pug')

// Definir la carpeta publica
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`El seridor esta funcionando en el puerto ${port}`)
})
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => { // req: lo que enviamos... res: lo que express nos responde
    res.send('Holisssss')
})

router.get('/inicio', (req, res) => {
    res.render('inicio')
})

router.get('/nosotros', (req, res) => {
    const viajes = 'Viaje a República Dominicana'
    res.render('nosotros', {
        viajes
    })
})

export default router
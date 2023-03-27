import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Html } from '../client/html.js'
import {resolve} from 'path'

const server = express()
const PORT = process.env.PORT || 8080
const __dirname = process.cwd()

const middlewear = [
    cors(),
    cookieParser(),
    express.json({limit: '50k'}),
    express.static(resolve(__dirname, 'dist'))
]

middlewear.forEach((it) => server.use(it))

server.get('/', (req, res) => {
    res.send('Express Server')
})

server.get('/', (req, res) => {
    const initialState = {
        location: req.url
    }

    res.send(
        Html({
            body: '',
            initialState
        }),
    )
})

server.listen(PORT, () => {
    console.log(`Server start on port: ${PORT}`)
})
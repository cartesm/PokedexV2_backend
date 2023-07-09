import cookie from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import routes from './routes/auth.routes.js'
import pokeRoutes from './routes/favorites.routes.js'
const server = express()

server.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
server.use(cookie())
server.use(morgan("dev"))
server.use(express.json())
server.use(routes)
server.use(pokeRoutes)

export default server


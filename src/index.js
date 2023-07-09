import server from './app.js'
import { PORT } from './config.js'
import { connectDB } from './database.js'

connectDB()

server.listen(PORT,()=>{
    console.log("server on port: "+PORT)
})
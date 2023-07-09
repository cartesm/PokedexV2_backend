import jw from 'jsonwebtoken'
import { KEY } from '../config.js'

export const verifyToken = (req, resp, next) => {

    const { token } = req.cookies
    if (!token) return resp.status(404).json(["seseion no iniciada"])

    jw.verify(token, KEY, (err, decode) => {
        if (err) resp.status(401).json(["usuario no autorizado"])
        else req.user = decode
    })
    next()
}
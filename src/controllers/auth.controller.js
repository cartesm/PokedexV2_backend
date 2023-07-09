import bcrypt from 'bcryptjs'
import { createToken } from '../libs/jw.js'
import userSchema from '../schemas/user.schema.js'

export const register = async (req, resp) => {
    const { userName, email, password } = req.body
    try {
        const exist = await userSchema.findOne({ email })
        if (exist) return resp.status(401).json(["Este email ya esta en uso"])

        const passwordEncripted = await bcrypt.hash(password, 10)
        const user = new userSchema({
            userName,
            password: passwordEncripted,
            email
        })
        const userSaved = await user.save()
        const token = await createToken({ id: userSaved._id })
        resp.cookie("token", token)

        return resp.json({
            userName,
            email,
        })

    } catch (err) {
        return resp.status(400).json(["error en la peticion"])
    }
}
export const login = async (req, resp) => {
    const { userName, email, password } = req.body
    try {
        const isFound = await userSchema.findOne({ email })
        if (!isFound) return resp.status(404).json(["usuario no encontrado"])

        const isMatch = await bcrypt.compare(password, isFound.password)
        if (!isMatch) return resp.status(401).json(["contraseña incorrecta"])

        const token = await createToken({ id: isFound._id });

        resp.cookie("token", token)

        return resp.json({
            userName: isFound.userName,
            email
        })
    } catch (err) {
        console.log(err)
    }
}
export const logout = async (req, resp) => {
    resp.cookie("token", "", {
        expires: new Date(0)
    })
    return resp.status(200).json(["sesion cerrada"])

}
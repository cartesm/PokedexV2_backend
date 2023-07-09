import { z } from 'zod'

export const registerSchema = z.object({
    userName: z.string({ required_error: "el nombre del usuario es obligatorio" }),
    email: z.string({
        required_error: "el email es obligatorio"
    }).email({ message: "el email ingresado no es valido" }),
    password: z.string({ required_error: "la contraseña es obligatoria" }).min(6, { message: "la cotraseña ingresada es muy corta" })

})


export const loginSchema = z.object({
    email: z.string({ required_error: "el email es obligatorio" }).email(),
    password: z.string({ required_error: "la contraseña es obligatoria" }).min(6, { message: "la contraseña es muy corta" })
})
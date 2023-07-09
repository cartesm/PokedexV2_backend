import { Router } from 'express'
import { login, logout, register } from '../controllers/auth.controller.js'
import { validateUser } from '../middlewares/validate.middleware.js'
import { loginSchema, registerSchema } from '../models/user.model.js'
const router = Router()

router.post("/register",validateUser(registerSchema), register)

router.post("/login",validateUser(loginSchema), login)

router.post("/logout", logout)

export default router
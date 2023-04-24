import { Request, Response, NextFunction } from "express"
import { z } from "zod"
import zodSafeParse from "../utilities/zodSafeParse"


const validateRequest = <Schema extends z.ZodTypeAny>(schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const result = zodSafeParse(schema, req.body)
    if (!result) return res.sendStatus(400)
    next()
}

export default validateRequest
import { z } from "zod"

const envSchema = z.object({
  PORT: z.string().nonempty()
})

export const env = envSchema.parse(process.env)
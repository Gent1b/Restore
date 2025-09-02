import z from "zod";

const passwordValidation = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/
)
export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(passwordValidation,{
        message:'Password must contain 1 alpha, 1 number, 1 special character, and be longer than 6 characters'
    })
})

export type RegisterSchema = z.infer<typeof registerSchema>;
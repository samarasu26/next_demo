import z from "zod"







export const blogSchema = z.object({

    title : z.string().min(3),
    desc : z.string().min(6),
    image : z.instanceof(File)
    









})
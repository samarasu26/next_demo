import z from "zod";





export const signUpSchema = z.object({


  name : z.string().min(3).max(30),
  email : z.email().min(1, "Email is required"),
  password : z.string().min(6).max(12),


})  


export const loginSchema = z.object({


  
  email : z.email().min(1, "Email is required"),
  password : z.string().min(6).max(12),


})  

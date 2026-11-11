"use client"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { loginSchema } from "@/app/schema/auth"
import z from "zod"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"





const Login = ()=> {


  const router = useRouter()

  const form =  useForm({
  
        resolver : zodResolver(loginSchema),
  
        defaultValues : {
  
          
          email : "",
          password : ""   
        }  
  
  
      })


      const onSubmit = async(data : z.infer<typeof loginSchema>) => {
      
      
            
              await authClient.signIn.email({
      
              
              email: data.email,
              password: data.password,


              fetchOptions : {

          onSuccess : ()=>{

            toast.success("logged in successfully")

            router.push("/")

          },
          onError : ({error})=>{

            toast.error(error.message)
          
          }

        }
              



              
        })
      
      
            
      
      
      
          }







  return (


    <div className= "mt-10">
      <Card>
        <CardHeader className = "text-center">
          <CardTitle>Login to your account</CardTitle>
          
        </CardHeader>
        <CardContent>
          <form onSubmit= {form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller control ={form.control} name ='email' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Enter Email</FieldLabel> 

        <input type="text" placeholder='x@example.com' {...field} /> 

        {fieldState.error && <FieldError className = "text-white">{fieldState.error.message}</FieldError>}


        </Field>
        

        



    )} 
    
    />

    <Controller control={form.control} name ='password' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Password</FieldLabel> 

        <input type="password" placeholder='******' {...field}/> 

        {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}


        </Field>
        

        



    )} 
    
    />
              
              <Field>
                <Button type="submit">Login</Button>
                
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/auth/signup">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
export default Login

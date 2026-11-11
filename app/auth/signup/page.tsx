"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { signUpSchema } from '@/app/schema/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import z from 'zod'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'






const SignUp = () => {


  const router = useRouter()
  


    const form =  useForm({

      resolver : zodResolver(signUpSchema),

      defaultValues : {

        name : "",
        email : "",
        password : ""   
      }  


    })


    const onSubmit = async(data : z.infer<typeof signUpSchema>) => {


      
        await authClient.signUp.email({

        name: data.name,
        email: data.email,
        password: data.password,

        fetchOptions : {

          onSuccess : ()=>{

            toast.success("sinup successfully")

            router.push("/auth/login")

          },
          onError : ({error})=>{

            toast.error(error.message)
          
          }

        }
              
        
      })

    }   





  return (


    <Card >
    <CardHeader className = "gap-6 text-center" >
    <CardTitle>Sign Up</CardTitle>  
    <CardDescription>
      Create an account to get started
    </CardDescription>
    </CardHeader>

    <CardContent>

    <form onSubmit={form.handleSubmit(onSubmit)}>

    <FieldGroup>

    <Controller control={form.control} name='name' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Name</FieldLabel> 

        <input type="text" placeholder='ex. john doe' {...field}/> 

        {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}


        </Field>
        

        



    )} 
    
    />

    <Controller control={form.control} name='email' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Email</FieldLabel> 

        <input type="email" placeholder='x@example.com' {...field}/> 

        {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}


        </Field>
        

        



    )} 
    
    />
<Controller control={form.control} name='password' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Password</FieldLabel> 

        <input type="password" placeholder='********' {...field}/> 

        {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}


        </Field>
        

        



    )} 
    
    />

    <Button type='submit' className='w-full'>Sign Up</Button>

    <p className="font-weight-300 text-muted-foreground">
                  Already&apos;have an account?  <a href="/auth/login">Login</a>
                </p>
  


    </FieldGroup>

      






    </form>






    </CardContent>








    </Card>











    
  )
}

export default SignUp
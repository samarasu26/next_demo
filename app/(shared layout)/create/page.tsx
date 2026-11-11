"use client"

import { createBlogAction } from '@/app/actions/actions'
import { blogSchema } from '@/app/schema/blog'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { api } from '@/convex/_generated/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'convex/react'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import Link from "next/link"







const CreateRoute = () => {


  const [isPending, startTransition ]  = useTransition()


  const router = useRouter()

   
  
  
  

  const form =  useForm({
    
          resolver : zodResolver(blogSchema),
    
          defaultValues : {
    
            
            title : "",
            desc : "",
            image : undefined,  
          }  
    
    
        })



  const onSubmit = async(values : z.infer<typeof blogSchema>)=>{    



    await createBlogAction(values)
    
    startTransition(()=>{

      console.log("runs on client side")

      

      


    })   


  }
 
  





  return (
    <div className = "py-12">

    <div className="text-center">

    <h1 className = "text-4xl font-semibold tracking-tight sm:text-5xl">Create Post</h1>
    <p className="text-lg text-muted-foreground pt-4">Share Your Thoughts about This Article</p>

    </div>


    

    <Card className = "flex items-center justify-center">
      
      <CardHeader className = "w-full max-w-2xl text-center">
      <CardTitle className = "pt-6">Create Blog Article</CardTitle>
      <CardDescription className = "pt-4">Write Your Own Article Here</CardDescription>

      </CardHeader>

      <CardContent className = "w-full max-w-xl">

      <form className = "" onSubmit = {form.handleSubmit(onSubmit)}>

      <FieldGroup className = "">

      <Controller control={form.control} name='image' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Image</FieldLabel> 

        <input type="file" placeholder='file' 

        onChange = {(e)=>{
          const file = e.target.files?.[0]
          field.onChange(file)
        }}
        
        accept = "image/*"  
        
        
        />     


        {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}

        </Field>

      )}

        />
    
    


      <Controller control={form.control} name='title' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Blog Title</FieldLabel> 

        <input type="text" placeholder='Title' {...field}/> 

        {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}


        </Field>
        

        



    )} 
    
    />


    <Controller control={form.control} name='desc' render={({field, fieldState}) => (

      

      <Field>
        <FieldLabel>Content</FieldLabel> 

        <input type = "text" placeholder='content' {...field} /> 

        {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}

        

        


        </Field>
        

        



    )} 
    
    />


      
    <Button disabled = {isPending}>


    {isPending? 

    <>
    
    
    <Loader2 className = "size-4 animate-spin"/><span>Loading...</span>

    </>   
    
    
    
    :


    <span className="">Create</span>
    
    
    
    }

    </Button>
      
      
      
      
      


      


      </FieldGroup>

      



      </form>



      </CardContent>










    </Card>








    </div>


  
    
    
    
  )
}

export default CreateRoute




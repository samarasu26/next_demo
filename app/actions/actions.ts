"use server"

import z from "zod"
import { blogSchema } from "../schema/blog"
import { fetchMutation } from "convex/nextjs"
import { api } from "@/convex/_generated/api"
import { redirect } from "next/navigation"
import {getToken} from "../../lib/auth-server"





export const createBlogAction = async(values : z.infer<typeof blogSchema>)=>{

   

    try{


         const token = await getToken();

         const parsed = blogSchema.safeParse(values)

         if (!parsed.success){

        return {

            error : "failed to upload"
        }

    }



        const imageUrl = await fetchMutation(api.posts.generateImageUploadUrl,{},{token})


        const uploadResult = await fetch(imageUrl, {

            method : "POST",

            headers : {

                "Content-Type"  : parsed.data.image.type,

                
            },

            body : parsed.data.image

            
        })

        if(!uploadResult){

            throw new Error ("failed to upload image")
        }

        const {storageId} = await uploadResult.json() 



        

    


    await fetchMutation(api.posts.createPost, {


        
        content: parsed.data.desc,
        title : parsed.data.title,
        imageStorageId : storageId
              
        

    },{token})

    }

    

    catch{

        return {

            error : "failed to create"
        }

    }  

    return redirect("/blog")



    
    

}








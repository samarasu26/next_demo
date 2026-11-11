
import { Card, CardContent, CardFooter, } from '@/components/ui/card'

import Link from 'next/link'
import Image from "next/image"

import { buttonVariants } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { fetchQuery } from 'convex/nextjs'

import { Suspense } from 'react'





const Blog = async () => {


  



  return (    



    <div className= "py-12">

    <div className="text-center">

    <h1 className = "text-xl tracking-tight font-semibold sm:text-5xl ">Our Blog</h1>


    <p className="pt-6 max-w-2xl text-muted-foreground mx-auto">Your thoughts, our thoughts</p>


    


    </div>

    <Suspense>

    <LoadBlogList  />

    


    </Suspense>

    </div> 

    
    
  )  
}
export default Blog







const LoadBlogList = async()=>{


  const data =  await fetchQuery(api.posts.getPosts)




  return(


    <div className="grid gap-24 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl mt-4 mx-auto">



    {data?.map((post)=>(



<div  key = {post._id} className = "flex flex-col justify-center items-center gap-4"> 

<img  src = {post.imageUrl ?? "https://images.unsplash.com/photo-1693936472247-6fd900ab06e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

} alt= {post.title} className = "w-70 h-50 object-cover hover:scale-105 transition-transform duration-500" />


          


       
        
        

        <Link href = {`/blog/${post._id}`}>

        <h1 className="font-semibold sm:text-xl">{post.title}</h1>       
        
        
        
        </Link>     

        

        <p className="text-muted-foreground line-clamp-3">{post.body}</p>


        

        <footer className = "mx-auto ">

        <Link href = {`/blog/${post._id}`} className = {buttonVariants({variant : "outline"})} >

       <span className="w-full">Read More</span> 
        
        
        
        
        
        
        </Link>

        </footer>   
        
        
        </div>


    ))}
    

    </div>





  )

  }
  









    

import { fetchQuery } from 'convex/nextjs';
import  Link  from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image  from "next/image"
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';





interface postRouteProps {

    params : Promise<{


        id : Id<"posts">


    }>


    


}



    
  

  










const PostDetails = async({params} : postRouteProps)=> {

    const {id} = await params

    const post = await fetchQuery(api.posts.getPostById, { id: id });

    
    if(!post){

      return null
    }


    






  return (



<div className = "animate-in fad-in">

<Link href = "/" className  = {buttonVariants({variant : "ghost"})}>

    

<ArrowLeft/>  

Go Back

</Link>

    <div className="flex flex-col justify-center items-center mx-auto">
    

    

<div className="mt-12">
  <img src = {post.imageUrl ?? "https://images.unsplash.com/photo-1693936472247-6fd900ab06e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

} alt ={post.title}  className = "objectfit-cover w-150 h-100 hover:scale-105 transition-transform duration-500"



/>

</div>


  

    <div className="text-center gap-4 flex flex-col mt-4">

    <h1 className = "">{post.title}</h1>
    <p className="">{post.body}</p>






    </div>





        
    </div>

    </div>

    
  )
}

export default PostDetails
"use client"

import Link from 'next/link'
import Image from "next/image"
import { Button, buttonVariants } from '../ui/button'
import { ModeToggle } from './DarkModeToggle'
import { useConvexAuth } from 'convex/react'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const {isLoading, isAuthenticated}  = useConvexAuth()

  const router = useRouter()






  return (

    <nav className = "py-12">

    <div className="flex items-center mx-auto justify-between px-4 py-6
    
    
    
    
    
    md:px-6 lg:px-8">


    <Link href = "/" className={buttonVariants({ variant: "ghost" })}>

      <img src = "https://tanstack.com/images/logos/logo-color-100.png" alt = "logo" width={40} height={40}/>

      <span className='ml-2 font-bold'>NextJS</span>

         
    </Link>

    
    <div className="">
    <Link href="/create" className={buttonVariants({ variant: "ghost" })}>
      Create
    </Link>
    <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
      Blog
    </Link>

    </div>

    
    
  <div className="">

  {isLoading ? null : isAuthenticated ?(

    <Button className = {buttonVariants({variant : "ghost"})}

    onClick = {()=>authClient.signOut({

      fetchOptions : {

        onSuccess : ()=>{

          toast.success("logged out successfully")
          
          router.push("/")

        },

        onError : ({error})=>{

          toast.error(error.message)
        }




      }




    })}
    
    
    
    
    >Logout</Button>

    
  ) : 

  <div className="">

    <Link href="/auth/signup" className={buttonVariants({ variant: "ghost" })}>
      SignUp
    </Link>
    <Link href="/auth/login" className={buttonVariants({ variant: "ghost" })}>
      Login
    </Link>

    

    </div>



}




</div>

<ModeToggle/>

    
     





    </div>

    


    

    </nav>





  



    

    
  )
}

export default Navbar
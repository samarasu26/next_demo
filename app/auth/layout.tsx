import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Arrow } from "radix-ui/internal"








const Authlayout = ({children}: {children: React.ReactNode}) => {









  return (

    <div className = "">

    <div className = "absolute top-4 left-4 mt-12 mx-4">

    <Link href="/" className = {buttonVariants({variant:'secondary'})}>


    

    <ArrowLeft className="size-4"/>

    Go Back
    
    
    
    
    
    
    
    
    </Link>







    </div>

    <div className="w-full mt-70 max-w-md mx-90">

        {children}




    </div>


    
        
        
        
        
        
        
        
        
        
    </div>
  )
}

export default Authlayout
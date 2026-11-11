import Navbar from '@/components/web/navbar'
import React from 'react'

const SharedLayout = ({ children }: { children: React.ReactNode }) => {










  return (

    <>   

    

      <div className="grid gird-cols-1">

      <Navbar/>

      {children}  



      </div>
      

         
        
        
    

    </>
  )
}

export default SharedLayout
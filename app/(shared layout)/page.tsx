import { Button } from "@/components/ui/button"
import  Link  from "next/link"

const Home = () => {


  



    
  return (

    <div className="flex flex-col">

    <section className="flex-1 flex flex-col items-center justify-center px-4 text-center ">
        <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mt-8">
            A simple Next.js 16 tutorial project exploring the new features and
            best practices. Built with Convex, Tailwind CSS, and love.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full px-8 font-bold">
              <Link href="/blog">Start Reading</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-black-500"
            >
              <Link href="/create">Write a Post</Link>
            </Button>
            
          </div>
        </div>
      </section>
      



      

    
      
      
      
      </div>


    
  )
}

export default Home
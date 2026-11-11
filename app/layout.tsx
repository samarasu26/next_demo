import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import { ThemeProvider } from "@/components/web/DarkThemeProvider";
import { ConvexClientProvider } from "@/components/web/ConvexClienProvider";
import { Toaster } from "@/components/ui/sonner";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Event",
  description: "The Hub for every Dev Event you musn't miss",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en" suppressHydrationWarning className = {`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>



      <body
        className= "min-h-full flex flex-col"
      >
      <ThemeProvider>

      


      

      

      
      <main className = "w-full max-w-7xl md:px-6 lg:py-4">
      
      <ConvexClientProvider>

        

        {children}        
        




      </ConvexClientProvider>

      </main>


      <Toaster closeButton/>
      


      






      </ThemeProvider>



      

      






      </body>
    </html>
  );


}

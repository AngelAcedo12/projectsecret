"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function page(){
    const root = useRouter()
    useEffect(() => {
        root.push("./")
  
    }, [])
  
   
    return (

            <div className="h-full flex flex-col justify-center w-full items-center align-middle text-center ">
                <h1>404 NOT FOUND</h1>
            </div>
        
        
        



    )

}
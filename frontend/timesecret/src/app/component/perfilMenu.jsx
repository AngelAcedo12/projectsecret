import Link from "next/link";

export default function PerfilMenu(){

    return (
        <>      
        <div>
            <Link href={"/Profile"} className="items-center content-center  flex justify-center">
            
            <div className="p-2">
            <svg version="1.0" className="dark:fill-white" xmlns="http://www.w3.org/2000/svg"
                width="30px" height="30px" viewBox="0 0 30.000000 30.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
                60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"/>
                <path d="M80 92 c-19 -9 -35 -24 -35 -32 0 -12 18 -15 105 -15 87 0 105 3 105
                15 0 20 -62 50 -105 50 -19 0 -51 -8 -70 -18z"/>
                </g>
                </svg>
            </div>

            </Link>
       
        </div>
        

        
        </>



    )

}
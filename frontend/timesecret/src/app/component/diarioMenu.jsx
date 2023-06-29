import Link from "next/link";

export default function DiarioMenu(){

    return (
        <>      
        <div>
            <Link href={"../"} className="items-center content-center  flex justify-center">
            
            <div className="p-2 " >
            <svg version="1.0" className="dark:fill-white fill-black" xmlns="http://www.w3.org/2000/svg"
                width="30px" height="30px" viewBox="0 0 30.000000 30.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                     stroke="none">
                <path d="M54 257 c-2 -7 -3 -58 -2 -113 3 -92 5 -100 26 -109 12 -5 22 -15 22
                -21 0 -6 7 -11 15 -11 10 0 15 10 15 29 0 28 -2 29 -30 23 -19 -4 -30 -3 -30
                4 0 7 24 11 60 11 l60 0 0 100 0 100 -65 0 c-45 0 -67 -4 -71 -13z"/>
                <path d="M210 170 c0 -91 2 -101 18 -98 15 3 17 16 17 98 0 82 -2 95 -17 98
                -16 3 -18 -7 -18 -98z"/>
                <path d="M150 40 c0 -5 23 -10 50 -10 28 0 50 5 50 10 0 6 -22 10 -50 10 -27
                0 -50 -4 -50 -10z"/>
                </g>
                </svg>
            </div>

            </Link>
       
        </div>
        

        
        </>



    )

}
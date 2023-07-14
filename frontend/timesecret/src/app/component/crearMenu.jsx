import Link from "next/link";

export default function CrearMenu(){

    return (
        <>      
        <div>
            <Link href={"../createMenssage"} className="items-center content-center  flex justify-center">
            
            <div className="p-2">
            <svg version="1.0" className="dark:fill-white" xmlns="http://www.w3.org/2000/svg"
                width="30px" height="30px" viewBox="0 0 50.000000 50.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
                -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
                167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c128 -58 164
                -223 72 -328 -101 -115 -283 -88 -348 52 -79 171 104 354 276 276z"/>
                <path d="M240 295 c0 -33 -2 -35 -35 -35 -19 0 -35 -4 -35 -10 0 -5 16 -10 35
                -10 33 0 35 -2 35 -35 0 -19 5 -35 10 -35 6 0 10 16 10 35 0 33 2 35 35 35 19
                0 35 5 35 10 0 6 -16 10 -35 10 -33 0 -35 2 -35 35 0 19 -4 35 -10 35 -5 0
                -10 -16 -10 -35z"/>
                </g>
                </svg>
            </div>

            </Link>
       
        </div>
        

        
        </>



    )

}
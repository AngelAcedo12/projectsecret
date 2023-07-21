import ExplorarTop from "./explorarMenuArriba.";

export default function MenuTOP() {
  return (
    <header className="w-full   top-0  ">
            <nav className="flex flex-row  gap-2 justify-between border-b border-black  dark:border-white
             py-1 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal  text-base sm:text-3xl text-start  w-full  py-2 sm:p-3 rounded-lg  transition-all  duration-500  animate-fade">TEMPORALSECRETS</h1>
              </div>
              <ExplorarTop></ExplorarTop>
            </nav>
    </header>
  )
}

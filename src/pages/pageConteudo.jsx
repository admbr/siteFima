import { NavigationBar } from "../components/navigationBar.jsx";

export function Conteudo() {
  return (
    <div className="
        relative 
        h-screen 
        w-screen
        bg-azulFima
        ">
        <div className="
          absolute 
          inset-0 
          bg-[url('./images/penroseTiling.png')]
          bg-center
          ">
        </div>
        <div className="
          absolute 
          inset-0 
          flex 
          justify-center 
          z-10
          ">
          <div className="
            bg-brancoFima 
            text-pretoFima 
            w-200
            h-full
            shadow-2xl/50
            ">
            <NavigationBar/>
            <div className="
              flex 
              justify-center 
              m-10
              ">
              <p>
                Conteudo
              </p>
            </div>
          </div>
        </div>
      </div>  
  )
}

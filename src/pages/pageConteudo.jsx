import { NavigationBar } from "../components/navigationBar.jsx";

export function Conteudo() {
  return (
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
  )
}

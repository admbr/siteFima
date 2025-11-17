import { NavigationBar } from "../components/navigationBar.jsx";

export function Home() {
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
          <NavigationBar isHome= {true}/>
          <div className="
            flex 
            justify-center 
            m-10
            ">
            <img src="./src/images/FiMa_invertido.png" alt="FiMaInvertido"/>
          </div>
        </div>
      </div>
    </div>
  )
}

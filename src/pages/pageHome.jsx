import { NavigationBar } from "../components/navigationBar.jsx";

export function Home() {
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
        flex 
        flex-col
        items-center
        ">
        <NavigationBar isHome= {true}/>
        <div className="
          flex 
          justify-center 
          m-10
          ">
          <img src="./src/images/FiMa_invertido.png" alt="FiMaInvertido"/>
        </div>
        <div className=" 
          mt-10
          ">
          <img 
            className = " 
            h-60
            w-100
            hover:inset-shadow-2xs
            "
            src="/src/images/testImage.jpg"
            alt="testImage"/>
        </div>
      </div>
    </div>
  )
}

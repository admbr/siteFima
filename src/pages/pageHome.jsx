import { NavigationBar } from "../components/navigationBar.jsx";
import { DivisionBar } from "../components/divisionBar.jsx";
import { ArticlePopup } from "../components/articlePopup.jsx";

export function Home() {
  return (
    <div className="
      flex 
      justify-center 
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
        <DivisionBar/>
        <div class="
          text-5xl
          text-cinzaFima
          flex 
          justify-center
          w-full
        ">
          <div>
            Novidades
          </div>
        </div>
        <DivisionBar/>
        <ArticlePopup
          imageurl = '/unconvergingGaussians.png'
          author = "Bruno Barros"
          title = "Introdução à Teoria de Distribuições"
          subject = "Análise"
          date = "11/20/2025"
          synopsis = "Teoria das distribuições é um assunto de extremo interessante tanto para quem estuda EDP's quanto para quem estuda QFT."
        />
      </div>
    </div>
  )
}

import { NavigationBar } from "../components/navigationBar.jsx";
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
        <ArticlePopup>
          <div className=" 
            h-50 
            w-64
            bg-[url('/unconvergingGaussians.png')]
            bg-cover 
            bg-center 
            "/>
          <div className=" 
            border 
            h-full
            grow
            ">
            
          </div>
        </ArticlePopup>
        <ArticlePopup>
          <div className=" 
            h-50 
            w-64
            bg-[url('/unconvergingGaussians.png')]
            bg-cover 
            bg-center 
            "/>
        </ArticlePopup>
        <ArticlePopup>
          <div className=" 
            h-50 
            w-64
            bg-[url('/unconvergingGaussians.png')]
            bg-center 
            group-hover:bg-[length:105%]
            "/>
        </ArticlePopup>
      </div>
    </div>
  )
}

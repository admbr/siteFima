import { Link } from "react-router-dom";

export function ArticlePopup ({ imageurl, subject, title, author, date, synopsis, link }) {
  return (
    <Link to={ link || "/conteudo"} className="
      hover:text-azulFima
      hover:underline
      hover:underline-offset-3
      m-2
      w-xl
      ">
      <div className =" 
        w-xl 
        h-60
        group
        bg-brancoFima
        my-10
        p-6
        z-10
        transition
        flex
        items-center
        delay-150
        duration-150
        ease-in-out 
        hover:-translate-y-1.5 
        hover:scale-105
        hover:shadow-xl/10
        ">
        <div style={{ backgroundImage: `url(${imageurl})`}} className="
          h-50 
          w-128
          bg-cover 
          bg-center 
          "/>
        <div className=" 
          h-full
          grow
          flex
          flex-col
          ">
          <div className="
            text-sm
            text-cinzaFima
            ">
            {subject}
          </div>
          <div className="
            font-serif
            text-2xl
            text-pretoFima
            ">
            {title}
          </div>
          <div className="
            text-sm
            text-cinzaFima
            ">
            Por {author} | {date}
          </div>
          <div className="
            grow
            text-sm
            text-cinzaFima
            ">
            <p>
              {synopsis}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

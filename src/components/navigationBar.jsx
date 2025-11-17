import { useState } from "react";
import { Link } from "react-router-dom";

export function NavigationBar (){


  return (
    <div className="
      flex 
      justify-between 
      items-center
      w-full
      ">
      <div className="
        py-2
        px-6
        text-pretoFima
        text-4xl
        ">
        <Link to="/">
          <img src="./src/images/FiMaInvertidoCropped.png" 
            alt="CamelFiMa" 
            className="h-20 w-40"
          />
        </Link>
      </div>
      <div className =" 
        flex
        justify-end-safe
        items-center
        w-grow
        pr-4
        ">
        <div className="
          flex
          jutify-evenly
          items-center
          w-full
          ">
          <Link to="/" className="
            hover:text-azulFima
            hover:underline
            hover:underline-offset-3
            m-2
            ">
            Home
          </Link>
          <Link to="/conteudo" className="
            hover:text-azulFima
            hover:underline
            hover:underline-offset-3
            m-2
            ">
            Conteúdo
          </Link>
          <Link to="/contatos" className="
            hover:text-azulFima
            hover:underline
            hover:underline-offset-3
            m-2
            ">
            Contatos
          </Link>
          <Link to="/sobre" className="
            hover:text-azulFima
            hover:underline
            hover:underline-offset-3
            m-2
            ">
            Sobre
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ArticlePopup ({ children }) {
  return (
    <div className =" 
      w-xl 
      h-60
      group
      bg-brancoFima
      my-10
      mx-30
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
      { children }
    </div>
  )
}

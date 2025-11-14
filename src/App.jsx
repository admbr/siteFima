import { NavigationBar } from "./components/navigationBar.jsx"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages/pageHome.jsx'
import { Sobre } from './pages/pageSobre'
import { Contatos } from './pages/pageContatos.jsx'
import { Conteudo } from './pages/pageConteudo.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/conteudo" element={<Conteudo/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
    </Router>
  )
}

export default App

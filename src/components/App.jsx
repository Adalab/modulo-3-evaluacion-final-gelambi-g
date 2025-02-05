import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import "../styles/App.scss";
import logoHarryPotter from "../images/harry-potter.png";

function App() {
  
  const [character, setCharacter] = useState ([])
  const [filterNameCharacter, setFilterNameCharacter] = useState ("")
  const [filterHouse, setFilterHouse] = useState ("Gryffindor")



  //recibe parametro de filterHouse porque es donde se guarda la información que cambia los datos y se pinta el array de la casa seleccionada
  useEffect (() => {
    getDataApi(filterHouse).then((data) => {
      setCharacter(data)
    })
  }, [filterHouse])

  //creamos función para cuando el valor del input no coincida con ningún nombre salga mensaje. 
  const notNameCharacter = () => {
    if(filterCharacters.length === 0) {
      return `No hay ningún personaje que coincida con la palabra ${filterNameCharacter}`
    }
  }

  const filterCharacters = character
    .filter((item) => item.name.toLowerCase().includes(filterNameCharacter))
    
  const {pathname} = useLocation () 
  const routeDetail = matchPath("/character/:idPerson", pathname)
  const characterIdlUrl = routeDetail ? routeDetail.params.idPerson : null
  const characterDetail = character.find(item => item.id === characterIdlUrl)

  return (
    <>
    <header><img src={logoHarryPotter} alt="Harry Potter" className="img-logo"/></header>
    <Routes >
      <Route path="/" element={
        <>
        <Filters 
        filterName={setFilterNameCharacter} 
        filterNameCharacter={filterNameCharacter}
        notCharacters={notNameCharacter()}
        
        setFilterHouse={setFilterHouse}
        filterHouse={filterHouse}/>

        <CharacterList characters={filterCharacters}/>
        </>
      }/>
      
      <Route path="/character/:idPerson" element={<CharacterDetail data={characterDetail}/>}/> 
    </Routes>
    </>
  )
}

export default App

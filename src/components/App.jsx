import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters";

function App() {
  
  const [character, setCharacter] = useState ([])
  const [filterNameCharacter, setFilterNameCharacter] = useState ("")
  const [filterHouse, setFilterHouse] = useState ("Gryffindor")


  useEffect (() => {
    //recibe parametro de filterHouse porque es donde se guarda la información que cambia los datos y se pinta el array de la casa seleccionada
    getDataApi(filterHouse).then((data) => {
      setCharacter(data)
    })
  }, [filterHouse])

  const notNameCharacter = () => {
    if(filterCharacters.length === 0) {
      return `No hay ningún personaje que coincida con la palabra ${filterNameCharacter}`
    }
  }

  const filterCharacters = character
    .filter((item) => item.name.toLowerCase().includes(filterNameCharacter))
    
   

  return (
    <>
    <Routes>
      <Route path="/" element={
        <>
        <Filters 
        filterName={setFilterNameCharacter} 
        filterNameCharacter={filterNameCharacter}
        notCharacters={notNameCharacter()}

        setFilterHouse={setFilterHouse}
        filterHouse={filterHouse}
        />
        <CharacterList characters={filterCharacters}/>

        </>
      }/>
      
      
    </Routes>
    </>
  )
}

export default App

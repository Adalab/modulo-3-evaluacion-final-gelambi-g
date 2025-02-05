import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters";

function App() {
  
  const [character, setCharacter] = useState ([])
  const [filterNameCharacter, setFilterNameCharacter] = useState ("")
  const [filterHouse, setFilterHouse] = useState ("Griffindor")


  useEffect (() => {
    getDataApi().then((data) => {
      setCharacter(data)
    })
  }, [])

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
        <Filters filterName={setFilterNameCharacter} 
        filterNameCharacter={filterNameCharacter}
        notCharacters={notNameCharacter()}
        filterHouse={setFilterHouse}
        />
        <CharacterList characters={filterCharacters}/>

        </>
      }/>
      
      
    </Routes>
    </>
  )
}

export default App

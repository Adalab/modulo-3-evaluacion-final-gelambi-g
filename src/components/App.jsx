import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters";

function App() {
  
  const [character, setCharacter] = useState ([])
  const [filterNameCharacter, setFilterNameCharacter] = useState ("")


  useEffect (() => {
    getDataApi().then((data) => {
      setCharacter(data)
    })
  }, [])

  const notNameCharacter = () => {
    if(character === "") {
      span.innherHTML = `No hay ningún personaje que coincida con la palabra ${filterName(ev.target.value)}`
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
        notCharacters={notNameCharacter()}/>
        <CharacterList characters={filterCharacters}/>

        </>
      }/>
      
      
    </Routes>
    </>
  )
}

export default App

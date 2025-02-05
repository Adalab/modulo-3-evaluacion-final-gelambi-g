import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import { Route, Routes } from "react-router-dom";

function App() {
  
  const [character, setCharacter] = useState ([])
  const [filterName, setFilterName] = useState ("")


  useEffect (() => {
    getDataApi().then((data) => {
      setCharacter(data)
    })
  }, [])

  const filterCharacters = character
    .filter((item) => item.name.toLowerCase().includes(filterName))

  return (
    <>
    <Routes>
      <Route path="/" element={
        <>

        <CharacterList characters={filterCharacters}/>

        </>
      }/>
      
      
    </Routes>
    </>
  )
}

export default App

import FilterCharacter from "./FilterCharacter"
import FilterHouse from "./FilterHouse"


function Filters({filterName, filterNameCharacter, notCharacters, setFilterHouse, filterHouse}) {

  const handleForm = (ev) => {
    ev.preventDefault()
  }

  return (
    <form onSubmit={handleForm}>
      <FilterCharacter filterName={filterName}
      filterNameCharacter={filterNameCharacter}
      notCharacters={notCharacters}
      />

      <FilterHouse 
      setFilterHouse={setFilterHouse}
      filterHouse={filterHouse}/>
    </form>
  )
}

export default Filters
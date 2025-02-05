import FilterCharacter from "./FilterCharacter"


function Filters({filterName, filterNameCharacter, notCharacters, filterHouse}) {

  const handleForm = (ev) => {
    ev.preventDefault()
  }

  return (
    <form onSubmit={handleForm}>
      <FilterCharacter filterName={filterName}
      filterNameCharacter={filterNameCharacter}
      notCharacters={notCharacters}
      filterHouse={filterHouse}/>
    </form>
  )
}

export default Filters
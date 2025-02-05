import FilterCharacter from "./FilterCharacter"


function Filters({filterName, filterNameCharacter, notCharacters}) {

  const handleForm = (ev) => {
    ev.preventDefault()
  }

  return (
    <form onSubmit={handleForm}>
      <FilterCharacter filterName={filterName}
      filterNameCharacter={filterNameCharacter}
      notCharacters={notCharacters}/>
    </form>
  )
}

export default Filters
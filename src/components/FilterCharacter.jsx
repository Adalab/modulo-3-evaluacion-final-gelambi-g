

function FilterCharacter({filterName, filterNameCharacter, notCharacters}) {

  const handleInputCharacter = (ev) => {
    filterName(ev.target.value)
    notNameCharacter()    
  }

  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" name="name" id="name" onChange={handleInputCharacter} value={filterNameCharacter}/>
      <span></span>

    </div>
  )
}

export default FilterCharacter
import PropTypes from "prop-types";

function FilterCharacter({filterName, filterNameCharacter, notCharacters}) {

  const handleInputCharacter = (ev) => {
    filterName(ev.target.value)  
  }

  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" name="name" id="name" onChange={handleInputCharacter} value={filterNameCharacter}/>
      <span>{notCharacters}</span>

    </div>
  )
}

FilterCharacter.propTypes = {
    filterName: PropTypes.func,
    filterNameCharacter: PropTypes.string,
    notCharacters: PropTypes.string,
}

export default FilterCharacter
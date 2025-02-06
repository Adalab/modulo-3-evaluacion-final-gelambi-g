import PropTypes from "prop-types";
import "../styles/filterCharacter.scss"

function FilterCharacter({filterName, filterNameCharacter, notCharacters}) {

  const handleInputCharacter = (ev) => {
    filterName(ev.target.value)  
  }

  return (
    <div className="div_filter">
      <div className="div_input">
        <label htmlFor="name" className="label">Buscar personaje: </label>
        <input type="text" name="name" id="name" placeholder="Nombre personaje" className="input_name" onChange={handleInputCharacter} value={filterNameCharacter}/>
      </div>
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
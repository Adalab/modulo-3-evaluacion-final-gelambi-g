import PropTypes from "prop-types";
import "../styles/filterHouse.scss"


function FilterHouse({setFilterHouse,filterHouse}) {

  const handleSelectHouse = (ev) => {
    setFilterHouse(ev.target.value)
  }

  return (
    <label className="label_house"> Selecciona la casa: 
      <select onChange={handleSelectHouse} value={filterHouse} className="select_house">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>
  )
}

FilterHouse.propTypes = {
  setFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string
}

export default FilterHouse
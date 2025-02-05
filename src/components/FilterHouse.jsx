import PropTypes from "prop-types";


function FilterHouse({setFilterHouse,filterHouse}) {

  const handleSelectHouse = (ev) => {
    setFilterHouse(ev.target.value)
  }

  return (
    <select onChange={handleSelectHouse} value={filterHouse}>
      <option value="Gryffindor">Gryffindor</option>
      <option value="Slytherin">Slytherin</option>
      <option value="Hufflepuff">Hufflepuff</option>
      <option value="Ravenclaw">Ravenclaw</option>
    </select>
  )
}

FilterHouse.propTypes = {
  setFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string
}

export default FilterHouse
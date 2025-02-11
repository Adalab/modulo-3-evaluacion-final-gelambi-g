import FilterCharacter from "./FilterCharacter"
import FilterHouse from "./FilterHouse"
import PropTypes from "prop-types";
import "../styles/filter.scss"

function Filters({filterName, filterNameCharacter, notCharacters, setFilterHouse, filterHouse}) {

  const handleForm = (ev) => {
    ev.preventDefault()
  }

  return (
    <form onSubmit={handleForm} className="form">
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

Filters.propTypes = {
    filterName: PropTypes.func,
    filterNameCharacter: PropTypes.string,
    notCharacters: PropTypes.string,
    setFilterHouse: PropTypes.func,
    filterHouse: PropTypes.string
  }
  
export default Filters
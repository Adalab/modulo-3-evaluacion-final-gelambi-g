
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

export default FilterHouse
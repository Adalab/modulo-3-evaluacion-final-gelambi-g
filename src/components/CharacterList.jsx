import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import "../styles/characterList.scss"

function CharacterList({characters}) {
  
  const characterHTML = characters.map(item => <CharacterCard key={item.id} info={item}/>)
  
  return (
    <div className="div_list">
      {characterHTML}
    </div>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
}

export default CharacterList
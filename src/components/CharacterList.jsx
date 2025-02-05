import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({characters}) {
  
  const characterHTML = characters.map(item => <CharacterCard key={item.id} info={item}/>)
  
  return (
    <div>
      {characterHTML}
    </div>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
}

export default CharacterList
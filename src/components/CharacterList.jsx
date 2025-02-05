import CharacterCard from "./CharacterCard";

function CharacterList({characters}) {
  
  const characterHTML = characters.map(item => <CharacterCard key={item.id} info={item}/>)
  
  return (
    <div>
      {characterHTML}
    </div>
  )
}

export default CharacterList
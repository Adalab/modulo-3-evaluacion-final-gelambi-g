import CharacterCard from "./CharacterCard";

function CharacterList({characters}) {
  
  const characterHTML = characters.map(item => <CharacterCard key={item.id} info={item}/>)
console.log(characterHTML)
  return (
    <div>
      {characterHTML}
    </div>
  )
}

export default CharacterList
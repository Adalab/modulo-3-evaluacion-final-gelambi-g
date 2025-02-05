import { Link } from "react-router-dom"


function CharacterCard({info}) {

  if (info.img === "") {
    info.img= "https://placehold.co/200x250?text=Imagen+no+disponible"
  }

  return (
    <Link to={`/character/${info.id}`}>
    <article>
      <img src={info.img} alt={`Foto de ${info.name}`} />
      <h3>{info.name}</h3>
      <h4>Especie: {info.specie}</h4>
    </article>
    </Link>
  )
}

export default CharacterCard


function CharacterCard({info}) {

  if (info.img === "") {
    info.img= "https://placehold.co/200x250?text=Imagen+no+disponible"
  }

  return (
    <article>
      <img src={info.img} alt="Foto del personaje" />
      <h3>{info.name}</h3>
      <h4>Especie: {info.specie}</h4>
    </article>
  )
}

export default CharacterCard


function CharacterDetail({data}) {
  
  if (data.nickName.length === 0) {
    data.nickName = "No tiene"
  }

  if (data.gener === "female") {
    data.gender = "Femenino"
  } else {
    data.gender = "Masculino"
  }

  if (data.specie === "human") {
    data.specie = "Humana"
  }

  if (data.alive) {
    data.alive = " Si"
  } else {
    data.alive = " No"
  }

  return (
    <article>
      <img src={data.img} alt={`Foto de ${data.name}`} />
      <h3>{data.name}</h3>
      <p>Nombre alternativo: {data.nickName}</p>
      <p>Genero: {data.gender}</p>
      <p>Casa: {data.house}</p>
      <p>Especie: {data.specie}</p>
      <p>¿Sigue con vida?{data.alive}</p>
    </article>
  )
}

export default CharacterDetail
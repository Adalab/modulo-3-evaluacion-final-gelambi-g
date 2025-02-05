import PropTypes from "prop-types";

function CharacterDetail({data}) {

  if (data.nickName.length === 0) {
    data.nickName = "No tiene"
  }

  if (data.gender === "male") {
    data.gender = "Masculino";
  } else if (data.gender === "female") {
    data.gender = "Femenino";
  } else {
    data.gender = "Otro";
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

CharacterDetail.propTypes = {
  data: PropTypes.string
}

export default CharacterDetail
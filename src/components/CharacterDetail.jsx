import "../styles/characterDetail.scss"
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
    <article className="article_detail">
      <img src={data.img} alt={`Foto de ${data.name}`} />
      <h3 className="article_name">{data.name}</h3>
      <span className="span_detail">Nombre alternativo:</span> 
      <p className="nickName">{data.nickName}</p>
      <p><span className="span_detail">Genero:</span> {data.gender}</p>
      <p><span className="span_detail">Casa:</span> {data.house}</p>
      <p><span className="span_detail">Especie:</span> {data.specie}</p>
      <p><span className="span_detail">¿Sigue con vida?</span>{data.alive}</p>
    </article>
  )
}

CharacterDetail.propTypes = {
  data: PropTypes.string
}

export default CharacterDetail
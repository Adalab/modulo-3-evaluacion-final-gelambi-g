import "../styles/characterDetail.scss"
import PropTypes from "prop-types";
import imgNoDispo from "../images/img-no-disp.png"

function CharacterDetail({data}) {


  return data ? (
    
    <article className="article_detail"> 
      <img src={data.img || imgNoDispo} alt={`Foto de ${data.name}`} className="article_img"/>
      <h3 className="article_name">{data.name}</h3>
      <span className="span_detail">Nombre alternativo:</span> 
      <p className="nickName">{data.nickName.length > 0 ? data.nickName : "No tiene"}</p>
      <p><span className="span_detail">Genero:</span> {data.gender === "male" ? "Masculino" : data.gender === "female" ? "Femenino" : "Otro"}</p>
      <p><span className="span_detail">Casa:</span> {data.house}</p>
      <p><span className="span_detail">Especie:</span> {data.specie === "human" ? "Humana" : "Otra"}</p>
      <p><span className="span_detail">¿Sigue con vida?</span>{data.alive === true ? " Si" : " No"}</p>
    </article>
  ) : <p>Noy hay datos disponibles</p>
}

CharacterDetail.propTypes = {
  data: PropTypes.object
}

export default CharacterDetail
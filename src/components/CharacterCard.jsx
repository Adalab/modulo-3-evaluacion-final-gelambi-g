import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import "../styles/characterCard.scss";

function CharacterCard({info}) {

  if (info.img === "") {
    info.img= "https://placehold.co/200x250?text=Imagen+no+disponible"
  }

  return (
    <Link to={`/character/${info.id}`}>
    <article className="article_card">
      <img src={info.img} alt={`Foto de ${info.name}`} className="article_img"/>
      <h3 className="article_text">{info.name}</h3>
      <h4 className="article_text">Especie: {info.specie}</h4>
    </article>
    </Link>
  )
}

CharacterCard.propTypes = {
  info: PropTypes.object,
}

export default CharacterCard
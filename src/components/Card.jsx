import '../Style/Card.css'

function Card({ id, cover, title }) {
    return (
      <div id={id} className="containerCard">
        <img className="card_img" src={cover} alt="cover" />
        <h2 className="card_title">{title}</h2>
      </div>
    );
  }
  
  export default Card;
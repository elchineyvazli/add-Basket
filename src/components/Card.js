import "./Card.scss";
const Card = ({
  cardId,
  cardName,
  cardCount,
  isShow,
  addFunction,
  removeFunction,
  price,
  idShow = false,
}) => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200/300" alt="sekil yoxdur" />
      <div className="bottom">
        <div className="info">
          {idShow && <p>{cardId}</p>}
          <p>{cardName}</p>
          <h1>{price}</h1>
        </div>
        <div className="buttonPart">
          <span>{cardCount}</span>
          {isShow && <button onClick={addFunction}>Add</button>}
          {!isShow && <button onClick={removeFunction}>Remove</button>}
        </div>
      </div>
    </div>
  );
};

export default Card;

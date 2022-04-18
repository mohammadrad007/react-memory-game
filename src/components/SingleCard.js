import "./singleCard.css";

const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={() => handleClick(card)}
        />
      </div>
    </div>
  );
};

export default SingleCard;

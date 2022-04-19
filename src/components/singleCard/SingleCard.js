import classes from "./singleCard.module.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={classes.card}>
      <div className={flipped ? classes.flipped : ""}>
        <img className={classes.front} src={card.src} alt="card front" />
        <img
          className={classes.back}
          src="/img/cover.png"
          alt="card back"
          onClick={() => handleClick(card)}
        />
      </div>
    </div>
  );
};

export default SingleCard;

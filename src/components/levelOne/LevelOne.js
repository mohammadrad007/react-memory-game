import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollHandler } from "../../global/global";
import SingleCard from "../singleCard/SingleCard";

import { cardImageOne } from "./../../data/levelOneData";

import classes from "./levelOne.module.css";

const LevelOne = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [levelup, setLevelup] = useState(false);
  const [loser, setLoser] = useState(false);
  const [matchStarted, setMatchStarted] = useState(false);
  let turnClass;

  const shuffleCards = () => {
    const shuffledCards = [...cardImageOne, ...cardImageOne]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    scrollHandler(0, 100);
    setMatchStarted(true);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
    const ready = cards.filter((c) => !c.matched);
    if (turns <= 12 && ready.length === 0 && matchStarted) {
      setLevelup(true);
      scrollHandler(0, 800);
    } else {
      setLoser(false);
      scrollHandler(0, 800);
    }
  }, [choiceOne, choiceTwo]);

  switch (true) {
    case turns < 8:
      turnClass = classes.green;
      break;
    case turns < 10:
      turnClass = classes.yellow;
      break;
    case turns > 8:
      turnClass = classes.red;
      break;
    default:
      turnClass = classes.green;
  }

  return (
    <div className={classes.container}>
      <h1>React Memory Match</h1>
      <button onClick={shuffleCards}>
        {cards.length === 0 ? `Start Game` : `Refresh Game`}
      </button>
      <p>Your turns: {turns}</p>
      <p className={turnClass}>Hints: you turns must be little than 12</p>
      <div className={classes.cardGrid}>
        {cards.map((card) => (
          <SingleCard
            card={card}
            handleChoice={handleChoice}
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      {levelup && (
        <div className={classes.great}>
          <p>Greate, now you can go to next level.</p>
          <Link to="/leveltwo">Go to level two</Link>
        </div>
      )}
      {true && (
        <div className={classes.loser}>
          <p>Losed!! but you can try again.</p>
          <button onClick={shuffleCards}>try again</button>
        </div>
      )}
    </div>
  );
};

export default LevelOne;

import React, { useEffect, useState } from "react";
import SingleCard from "../singleCard/SingleCard";

import { cardImageOne } from "./../../data/levelOneData";

import classes from "./levelOne.module.css";

const LevelOne = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  // const [ready, setReady] = useState(false);
  let turnClass;

  const shuffleCards = () => {
    const shuffledCards = [...cardImageOne, ...cardImageOne]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
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
    console.log(ready);
    console.log(turns);
    if (turns <= 12 && ready.length === 0) {
      console.log("ready for go to level two");
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
      <button onClick={shuffleCards}>New Game</button>
      <p>{turns}</p>
      <p className={turnClass}>Hints: you turns must be littel than 12</p>
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
    </div>
  );
};

export default LevelOne;

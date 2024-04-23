import type { LinksFunction } from "@remix-run/node";
import styles from './Flashcard.css?url';
import { useContext } from "react";

import { GameContext } from '../components/GameProvider';

type SideShown = 'question' | 'answer';

export type FlashcardType = {
  id: string;
  question: string;
  answer: string;
  sideShown: SideShown;
}

type FlashcardPropsType = {
  card: FlashcardType;
};

function Flashcard({card}: FlashcardPropsType) {

  const { updateFlashCard } = useContext(GameContext);

  const handleOnClick = () => {
    updateFlashCard({
      ...card,
      sideShown: card.sideShown === 'question' ? 'answer' : 'question'
    })
  };
  return (
    <div className="flashcard" onClick={handleOnClick}>
      {card.sideShown === 'question' && <h2>{card.question}</h2>}
      {card.sideShown === 'answer' && <h2>{card.answer}</h2>}
    </div>
  )
};


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export default Flashcard;
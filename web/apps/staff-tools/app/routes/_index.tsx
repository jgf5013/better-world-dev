import type { LinksFunction, MetaFunction } from "@remix-run/node";
import appStyles from '../styles/app.css?url';
import { FlashcardType, GameContext } from "@better-world-dev/game";
import { useContext } from "react";
import { Flashcard } from "@better-world-dev/elements";

export const meta: MetaFunction = () => {
  return [
    { title: "Staff Tools" },
    { name: "description", content: "Ya know..." },
  ];
};


export default function Index() {
  
  const { flashcards, updateFlashCard } = useContext(GameContext);
  
  const handleOnClick = (card: FlashcardType) => {
    console.log('stafftools - _index - handleOnClick...');
    updateFlashCard({
      ...card,
      sideShown: card.sideShown === 'question' ? 'answer' : 'question'
    });
  };
  return (
    <> 
      {flashcards.map((card) => {
        return (
          <div key={`flashcard-${card.id}`} className="flashcardContainer">
            <Flashcard card={card} onClick={handleOnClick} />
          </div>
        );
      })}
    </>
  );
}



export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];

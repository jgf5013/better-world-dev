import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Flashcard } from '@better-world-dev/elements';
import { FlashcardType, GameContext } from "@better-world-dev/game";
import { useContext } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Flashcards" },
    { name: "description", content: "Some leafy greens (and reds)" },
  ];
};

export default function Index() {
  
  const { flashcards, updateFlashCard } = useContext(GameContext);
  
  const handleOnClick = (card: FlashcardType) => {
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
];

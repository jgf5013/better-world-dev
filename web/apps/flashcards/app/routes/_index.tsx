import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Flashcard } from '@better-world-dev/elements';
import { GameContext } from "@better-world-dev/game";
import { useContext } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  
  const { flashcards } = useContext(GameContext);
  return (
    <>
      {flashcards.map((card) => {
        return (
          <div key={`flashcard-${card.id}`} className="flashcardContainer">
            <Flashcard card={card} />
          </div>
        );
      })}
    </>
  );
}

export const links: LinksFunction = () => [
];

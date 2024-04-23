import type { LinksFunction, MetaFunction } from "@remix-run/node";

import darkStyles from '../styles/dark.css?url';
import appStyles from '../styles/app.css?url';
import Flashcard, { FlashcardType, links as flashcardLinks } from "~/components/Flashcard";
import GameProvider, { GameContext } from "~/components/GameProvider";
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
    <div className="app">
      
      {flashcards.map((card) => {
        return (
          <div key={`flashcard-${card.id}`} className="flashcardContainer">
            <Flashcard card={card} />
          </div>
        );
      })}
    </div>
  );
}



export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
  {
    rel: 'stylesheet',
    href: darkStyles,
    media: '(prefers-color-scheme: dark)',
  },
  ...flashcardLinks(),
];

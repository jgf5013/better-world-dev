import { Flashcard } from "@better-world-dev/elements";
import { FlashcardType, GameContext } from "@better-world-dev/game";
import { LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FocusEvent, useContext } from "react";
import questionsStyles from '../styles/questions.css?url';

type QuestionsParamType = {
  id: string;
}

export const loader = ({ params }: { params: QuestionsParamType}): QuestionsParamType => {
  const { id } = params;
  return { id };
};

type LoaderType = Awaited<ReturnType<typeof loader>>;
export default function QuestionId() {
  const { flashcards, updateFlashCard } = useContext(GameContext);
  const { id } = useLoaderData<LoaderType>();
  const flashcard = flashcards.find((f) => f.id === id);
  
  if(!flashcard) { return; }

  const handleOnAnswerBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };
  
  const handleOnFlashcardClick = (card: FlashcardType) => {
    updateFlashCard({
      ...card,
      sideShown: card.sideShown === 'question' ? 'answer' : 'question'
    });
  };

  return (
      <div className="row">
        <Flashcard card={flashcard} onClick={handleOnFlashcardClick} />
        <div className="column">
          <input className="input" type="text" onBlur={handleOnAnswerBlur} value={flashcard?.question.text}/>
        </div>
      </div>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: questionsStyles }
];

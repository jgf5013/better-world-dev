import { Flashcard } from "@better-world-dev/elements";
import { GameContext } from "@better-world-dev/game";
import { LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useContext } from "react";
// import { useLoaderData } from "@remix-run/react";

type QuestionsParamType = {
  id: string;
}

export const loader = ({ params }: { params: QuestionsParamType}): QuestionsParamType => {
  const { id } = params;
  return { id };
};

type LoaderType = Awaited<ReturnType<typeof loader>>;
export default function QuestionId() {
  const { flashcards } = useContext(GameContext);
  const { id } = useLoaderData<LoaderType>();
  const flashcard = flashcards.find((f) => f.id === id);

  return (
    <div key={`flashcard-${id}`} className="flashcardContainer">
      <Flashcard card={flashcard} />
    </div>
  );
}

export const links: LinksFunction = () => [
];

import type { LinksFunction } from "@remix-run/node";
import styles from './QuestionAndAnswer.css?url';
import { FocusEventHandler, useContext } from "react";
import { Strong, Inset as RadixInset, Text as RadixText, TextField } from "@radix-ui/themes";
import { Card } from '@better-world-dev/elements';
import { GameContext, FlashcardType } from '@better-world-dev/game';


type FlashcardPropsType = {
  card: FlashcardType;
};

function Flashcard({card}: FlashcardPropsType) {
  console.log('QuestionAndAnswer - card=', card);
  const handleOnQuestionBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    console.log('Flashcard.handleOnQuestionBlur- event=', event);
  };
  
  const handleOnAnswerBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    console.log('Flashcard.handleOnAnswerBlur- event=', event);
  };


  return (
    <div>
      <TextField.Root>
        <TextField.Slot onBlur={handleOnQuestionBlur}>
          {}
        </TextField.Slot>
      </TextField.Root>
      <TextField.Root>
        <TextField.Slot onBlur={handleOnAnswerBlur}>
          {/* answer */}
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
}


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export default Flashcard;
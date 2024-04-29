import type { LinksFunction } from "@remix-run/node";
import styles from './Flashcard.module.css';
import { useContext } from "react";
import { Strong, Inset as RadixInset, Text as RadixText } from "@radix-ui/themes";
import { Card } from '@better-world-dev/elements';
import { GameContext } from '@better-world-dev/game';
import React from "react";


export type SideShown = 'question' | 'answer';
export type QuestionType = 'image' | 'text';

export type FlashcardType = {
  id: string;
  question: {
    [Property in QuestionType]?: string
  };
  questionType: QuestionType;
  answer: string;
  sideShown: SideShown;
}

type FlashcardPropsType = {
  card: FlashcardType;
};

export const Flashcard = ({card}: FlashcardPropsType) => {

  const { updateFlashCard } = useContext(GameContext);

  const handleOnClick = () => {
    updateFlashCard({
      ...card,
      sideShown: card.sideShown === 'question' ? 'answer' : 'question'
    });
  };
  const Inset = (
    <RadixInset clip="padding-box" side="top" pb="current">
      <img
        className={styles.image}
        src={card.question.image}
        alt="Tree" />
    </RadixInset>
  );
  const Text = (
    <div className={styles.text}>
      <RadixText as="p" size="3">
        <Strong>{card.sideShown === 'question' ? 'Name' : card.answer}</Strong>
      </RadixText>
    </div>
  );
  return (
    <div className={styles.flashcard}>
      <Card Inset={Inset} Text={Text} onClick={handleOnClick} />
    </div>
  );
};
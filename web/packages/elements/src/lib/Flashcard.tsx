import { Strong, Inset as RadixInset, Text as RadixText } from "@radix-ui/themes";
import { Card } from '@better-world-dev/elements';
import { FlashcardType } from '@better-world-dev/game';
import styles from './Flashcard.module.css';

type FlashcardPropsType = {
  card: FlashcardType;
  onClick: (FlascardType) => void;
};

export const Flashcard = ({card, onClick}: FlashcardPropsType) => {

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
      <Card Inset={Inset} Text={Text} onClick={() => onClick(card)} />
    </div>
  );
};
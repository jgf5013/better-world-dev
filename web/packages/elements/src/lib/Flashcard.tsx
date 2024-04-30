import { Strong, Inset as RadixInset, Text as RadixText } from "@radix-ui/themes";
import { Card } from './Card';
import { FlashcardType } from '@better-world-dev/game';

type FlashcardPropsType = {
  card: FlashcardType;
  onClick: (FlascardType) => void;
};

export const Flashcard = ({card, onClick}: FlashcardPropsType) => {


  const Inset = (
    <RadixInset clip="padding-box" side="top" pb="current">
      <img
        style={{
          maxWidth: "100%",
          display: "block",
          margin: "auto",
          borderRadius: "0.15rem"
        }}
        src={card.question.image}
        alt="Tree" />
    </RadixInset>
  );
  const Text = (
    <div style={{ backgroundColor: "#859398", borderRadius: "0.15rem" }}>
      <RadixText as="p" size="3">
        <Strong>{card.sideShown === 'question' ? 'Name A' : card.answer}</Strong>
      </RadixText>
    </div>
  );
  return (
    <div style={{
      cursor: "pointer",
      backgroundColor: "#fff",
      borderRadius: "0.2rem",
      padding: "0.5rem 0.75rem",
      margin: "0.8rem",
      width: "20vw",
      aspectRatio: "1.25",
      alignContent: "center",
      textAlign: "center"
    }}>
      <Card Inset={Inset} Text={Text} onClick={() => onClick(card)} />
    </div>
  );
};
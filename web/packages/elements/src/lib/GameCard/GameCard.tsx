import { Box, Card as RadixCard, InsetProps as RadixInsetProps } from "@radix-ui/themes";
import { MouseEventHandler, ReactElement } from "react";

type GameCardType = {
  Inset: RadixInsetProps,
  Text: ReactElement,
  onClick: MouseEventHandler;
};

export const GameCard = ({ Inset, Text, onClick }: GameCardType) => {
  return (
    <Box maxWidth="15rem" onClick={onClick}>
      <RadixCard size="2">
        <>{Inset}</>
        <>{Text}</>
      </RadixCard>
    </Box>
  );
};
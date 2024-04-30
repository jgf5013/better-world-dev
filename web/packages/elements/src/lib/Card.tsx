import { Box, Card as RadixCard, InsetProps as RadixInsetProps } from '@radix-ui/themes';
import { MouseEventHandler, ReactElement } from 'react';

type CardType = {
  Inset: RadixInsetProps,
  Text: ReactElement,
  onClick: MouseEventHandler;
};

export const Card = ({ Inset, Text, onClick }: CardType) => {
  return (
    <Box maxWidth="240px" onClick={onClick}>
      <RadixCard size="2">
        <>{Inset}</>
        <>{Text}</>
      </RadixCard>
    </Box>
  );
};
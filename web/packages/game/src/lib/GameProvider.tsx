import { ReactNode, createContext, useState } from "react";

import quizData from  './tree-leaves.json';


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

const flashcards = quizData as FlashcardType[];

type GameContextType = {
  flashcards: FlashcardType[];
  updateFlashCard: (card: FlashcardType) => void;
};

const initialState: GameContextType = {
  flashcards,
  updateFlashCard: () => {}
};

const GameContext = createContext<GameContextType>(initialState);

type GameProviderType = {
  children: ReactNode
};


const GameProvider = ({ children }: GameProviderType) => {

  const [ state, setState ] = useState<GameContextType>({ ...initialState });

  const updateFlashCard = (updatedCard: FlashcardType) => {
    const newCards = [
      ...state.flashcards.map((exisitingCard) => exisitingCard.id === updatedCard.id ? updatedCard : exisitingCard)
    ];
    setState({
      ...state,
      flashcards: newCards
    });
  };

  return (
    <GameContext.Provider value={{...state, updateFlashCard}}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
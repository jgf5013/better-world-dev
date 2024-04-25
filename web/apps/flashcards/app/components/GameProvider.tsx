import { ReactNode, createContext, useState } from "react";
import { FlashcardType } from "./Flashcard";

type GameContextType = {
  flashcards: FlashcardType[];
  updateFlashCard: (card: FlashcardType) => void;
};

const initialState: GameContextType = {
  flashcards: [{
    id: 'daa164a3-49d5-47c3-add0-dc0327eb4ea4',
    sideShown: 'question',
    question: 'Where is Spain?',
    answer: 'Next to Portugal',
  }, {
    id: '16974773-e4f9-4fc8-88b2-95cef53ab707',
    sideShown: 'question',
    question: 'What is the capital of Romania?',
    answer: 'Bucharest',
  }, {
    id: 'f9be564b-2b46-465d-ac06-545f13daf55e',
    sideShown: 'question',
    question: 'What is the approximate latitude of Lebanon?',
    answer: '33.8° N',
  }, {
    id: 'de5e4543-0907-4102-8ef4-842dadf96f9a',
    sideShown: 'question',
    question: `Name the two country's flags that are square`,
    answer: 'Switzerland and Vatican City',
  }, {
    id: '73567924-e46c-47c2-b6d1-9b1cd7546162',
    sideShown: 'question',
    question: 'Which country has the highest average elevation?',
    answer: 'Bhutan',
  }],
  updateFlashCard: () => {}
};

export const GameContext = createContext<GameContextType>(initialState);

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

export default GameProvider;
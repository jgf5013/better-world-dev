import { ReactNode, createContext, useState } from "react";
import { FlashcardType } from "./Flashcard";
// import geography from './geography.json';
import quizData from  './tree-leaves.json';


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
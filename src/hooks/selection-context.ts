import { createContext, useContext } from "react";

export type SelectedOption = 'movies' | 'stream' | 'events';

export type SelectedOptionContextProps = {
    selectedOption: SelectedOption;
    setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOption>>;
}

export const SelectionContext = createContext<SelectedOptionContextProps>({ selectedOption: 'movies', setSelectedOption: () => { } });

export const useSelectionContext = () => useContext(SelectionContext);

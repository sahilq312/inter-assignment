import { createContext, useContext, useState } from "react";

type SelectedOption = 'movies' | 'stream' | 'events';

type SelectedOptionContextProps = {
    selectedOption: SelectedOption;
    setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOption>>;
}

export const SelectionContext = createContext<SelectedOptionContextProps>({selectedOption: 'movies', setSelectedOption: () => {}});

export const SelectionProvider = ({children}: {children: React.ReactNode}) => {
    const [selectedOption, setSelectedOption] = useState<SelectedOption>('movies');
    return (
        <SelectionContext.Provider value={{selectedOption, setSelectedOption}}>
            {children}
        </SelectionContext.Provider>
    );
}

export const useSelectionContext = () => {
    return useContext(SelectionContext);
}

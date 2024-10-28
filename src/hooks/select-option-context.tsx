import React, { useState } from "react";
import { SelectedOption, SelectionContext } from "./selection-context";
export const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedOption, setSelectedOption] = useState<SelectedOption>('movies');
    return (
        <SelectionContext.Provider value={{ selectedOption, setSelectedOption }}>
            {children}
        </SelectionContext.Provider>
    );
};

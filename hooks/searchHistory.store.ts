import {create} from "zustand";

interface SearchHistoryStore {
    history: string[],
    addValueToHistory: (value:string) => void;
    removeValueFromHistory: (value:string) => void;
}

export const useSearchHistoryStore = create<SearchHistoryStore>((set) => ({
    history: [],
    addValueToHistory: (value) => set((state) => ({history: [...state.history, value]})),
    removeValueFromHistory: (value) => set((state) => ({
    history: state.history.filter((item) =>  item !== value)
}))
}))
import {create} from "zustand";

interface SearchValueStore {
    value: string,
    setValue: (value: string) => void;
}

export const useSearchValueStore = create<SearchValueStore>((set) => ({
    value: "",
    setValue: (value) => set({value})
}))
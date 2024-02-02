"use client"

import React from "react";
import {useSearchHistoryStore} from "@/hooks/searchHistory.store";
import {useSearchValueStore} from "@/hooks/searchValue.store";


const SearchHistory: React.FC = () => {
    const searchHistory = useSearchHistoryStore((state) => state.history)
    const searchValueStore = useSearchValueStore();
    const setValue = searchValueStore.setValue
    const removeValueFromHistory = useSearchHistoryStore((state) => state.removeValueFromHistory)

    const handleHistoryItemClick = (selectedValue: string) => {
        setValue(selectedValue)
    }

    const handleRemoveItemClick = (selectedValue: string) => {
        removeValueFromHistory(selectedValue)
    }

    return (
        <div className="flex flex-col gap-y-2 w-full mt-5  lg:border-l-2 lg:border-gray-600">
            <h1 className="text-white text-2xl font-semibold lg:ml-5">검색기록</h1>
            <ul className="p-5">
                {searchHistory.map((value, index) => (
                    <li key={index} className="flex justify-between">
                        <button onClick={() => handleHistoryItemClick(value)}>
                            <p className="text-neutral-400 text-sm truncate">{value}</p>
                        </button>
                        <button onClick={() => handleRemoveItemClick(value)}>
                            <p className="text-neutral-400 text-base truncate">X</p>
                        </button>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SearchHistory;
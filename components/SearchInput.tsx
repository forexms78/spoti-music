"use client";

import useDebounce from "@/hooks/useDebounce";
import {useRouter} from "next/navigation";
import qs from "query-string";
import {SetStateAction, useEffect, useState} from "react";
import Input from "./Input";
import {useSearchHistoryStore} from "@/hooks/searchHistory.store";
import {useSearchValueStore} from "@/hooks/searchValue.store";

const SearchInput = () => {
    const router = useRouter();
    const searchValueStore = useSearchValueStore()
    const value = searchValueStore.value
    const setValue = searchValueStore.setValue;
    const addValueToHistory = useSearchHistoryStore((state) => state.addValueToHistory)

    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: "/search",
            query: query,
        });

        router.push(url);
    }, [debouncedValue, router]);


    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleKeyPress = (event : any) => {
        if(event.key === 'Enter'){
            addValueToHistory(value)
        }
    }

    return (
        <Input
            placeholder="무슨 노래를 검색하고 싶나요?"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
    );
};

export default SearchInput;

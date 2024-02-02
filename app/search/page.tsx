import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";
import SearchContent from "./components/SearchContent";
import SearchHistory from "@/app/search/components/SearchHistory";


export const revalidate = 0;

interface SearchProps {
    searchParams: { title: string };
}

const Search = async ({searchParams}: SearchProps) => {
    const songs = await getSongsByTitle(searchParams.title);

    return (
        <div
            className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
    "
        >
            <Header>
                <div className="grid lg:grid-cols-3">

                    <div className="col-span-2 lg:mr-3">

                        <div className="mb-2 flex flex-col gap-y-6 ">
                            <h1 className="text-white text-3xl font-semibold">곡검색</h1>
                            <SearchInput/>
                        </div>

                        <SearchContent songs={songs}/>
                    </div>
                    <SearchHistory/>
                </div>

            </Header>


        </div>
    )
        ;
};

export default Search;

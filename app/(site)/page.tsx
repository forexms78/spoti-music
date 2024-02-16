import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
    const songs = await getSongs();

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
                <div className="mb-2">
                    <div className="mt-2 mb-7 px-6">
                        <div className="flex justify-center items-center space-x-3">
                            <Image src="/images/react-logo2.png"
                                   alt="react-logo"
                                   width="50"
                                   height="50"
                                   className="rounded-2xl"
                            />
                            <Image src="/images/ts-logo.png"
                                   alt="ts-logo"
                                   width="50"
                                   height="50"
                                   className="rounded-2xl"
                            />
                            <Image src="/images/supabase-logo.jpeg"
                                   alt="supabase-logo"
                                   width="50"
                                   height="50"
                                   className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </Header>
            <div className="mt-2 mb-7 px-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-semibold">
                        Bellboi 플레이리스트
                    </h1>
                </div>
                <PageContent songs={songs}/>
            </div>
            <div className="p-7">
            <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
                <ListItem
                    name="Liked Songs"
                    image="/images/liked.png"
                    href="liked"
                />
            </div>
            </div>
        </div>
    );
}

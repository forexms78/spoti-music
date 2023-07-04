import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";

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
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-semibold">
                💻 박병호 포트폴리오 음악 스트리밍 사이트 (spotify클론 디테일
                수정) <br />
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-3 mb-3 px-3">
                <h1 className="text-white text-l font-semibold">
                  node v20.1.0
                </h1>
              </div>
            </div>
          </div>

          <h1
            className="
            text-white 
              text-3xl 
              font-semibold
            "
          >
            스포티 음악차트 🎵
          </h1>
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
            <ListItem
              name="Liked Songs"
              image="/images/liked.png"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            새로운 노래 추천 🤠
          </h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}

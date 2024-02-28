import {Song} from "@/types";
import usePlayer from "./usePlayer";
// import useAuthModal from "./useAuthModal";
// import {useUser} from "./useUser";

const useOnPlay = (song: Song[]) => {
  const player = usePlayer();

  // const authModal = useAuthModal();
  // const { user } = useUser();

  // AuthModal 로그인시 곡재생할지 여부
  return (id: string) => {
    // if (!user) {
    //   return authModal.onOpen();
    // }

    player.setId(id);
    player.setIds(song.map((song) => song.id));
  };
};

export default useOnPlay;

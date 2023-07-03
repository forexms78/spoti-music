import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (song: Song[]) => {
  const player = usePlayer();

  const authModal = useAuthModal();
  const { user } = useUser();

  // AuthModal 로그인시 곡재생할지 여부
  const onPlay = (id: string) => {
    if (!user) {
      return;
    }

    player.setId(id);
    player.setIds(song.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;

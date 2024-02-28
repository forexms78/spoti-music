"use client";

import { useEffect, useState } from "react";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import useSound from "use-sound";

interface PlayContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [recommendVolume, setRecommendVolume] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  // 다음곡으로 이동하는 함수
  const onPlayNext = () => {

    if (player.ids.length === 0) {  // 대기열에 곡이없으면 리턴하지 않음
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId); // 현재 재생중인 노래를 지정

    const nextSong = player.ids[currentIndex + 1]; // 다음 재생될 노래를 지정

    if (!nextSong) {                        // 다음 재생될 곡이 없으면 대기열의 처음으로 이동
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong); // 다음곡으로 이동
  };

  //TODO 플레이리스트 대기열을 셔플한다
  // const onPlayShuffle = () => {
  //   if (player.ids.length === 0) {        // 대기열에 곡이 없으면 반응 없음
  //     return;
  //   }
  //
  //   const currentIndex = player.ids.findIndex((id) => id === player.activeId); // 현재 재생중인 곡을 저장
  //
  //   for (let i = player.ids.length - 1; i > 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * (i + 1));
  //     const tempId = player.ids[randomIndex]
  // }

  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);

    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) {
      return player.setId(player.ids[(player.ids.length = 1)]);
    }

    player.setId(previousSong);
  };

  const [play, { pause, sound }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    setRecommendVolume(volume);
    if (volume === 0) {
      setVolume(recommendVolume);
    } else {
      setVolume(0);
    }
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div
        className="
      flex 
      md:hidden 
      col-auto 
      w-full 
      justify-end 
      items-center
    "
      >
        <div
          onClick={handlePlay}
          className="
        h-10
        w-10
        flex 
        items-center 
        justify-center 
        rounded-full 
        bg-white 
        p-1 
        cursor-pointer
      "
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div
        className="
      hidden
      h-full
      md:flex 
      justify-center 
      items-center 
      w-full 
      max-w-[722px] 
      gap-x-6
    "
      >
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className="
        text-neutral-400 
        cursor-pointer 
        hover:text-white 
        transition
      "
        />
        <div
          onClick={handlePlay}
          className="
        flex 
        items-center 
        justify-center
        h-10
        w-10 
        rounded-full 
        bg-white 
        p-1 
        cursor-pointer
      "
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="
        text-neutral-400 
        cursor-pointer 
        hover:text-white 
        transition
      "
        />
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={34}
          />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
};
export default PlayerContent;

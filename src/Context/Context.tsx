import React, { useState, useEffect, ReactNode } from 'react';

interface Audio {
  track: string;
  src: string;
  img: string;
  artist: string;
  duration: string;
}

export interface Props {
  list: Audio;
  song: Audio;
  playing: boolean;
  volume: number;
  currentTime: number;
  durationTime: number;
  clickedTime: number;
  currentVolume: number;
  active: boolean;
  setSong: React.Dispatch<React.SetStateAction<Audio>>;
  setList: React.Dispatch<React.SetStateAction<Audio>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setDurationTime: React.Dispatch<React.SetStateAction<number>>;
  setClickedTime: React.Dispatch<React.SetStateAction<number>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  setCurrentVolume: React.Dispatch<React.SetStateAction<number>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
  children: ReactNode;
}

const defaultValue = {
  list: [],
  song: {
    track: '',
    src: '',
    img: '',
    artist: '',
    duration: ''
  },
  playing: false,
  currentTime: 0,
  durationTime: 0,
  clickedTime: 0,
  volume: 0.5,
  currentVolume: 0,
  active: true,
  setList: () => {},
  setSong: () => {},
  setCurrentTime: () => {},
  setDurationTime: () => {},
  setClickedTime: () => {},
  setPlaying: () => {},
  setVolume: () => {},
  setCurrentVolume: () => {},
  setActive: () => {}
};

export const Context = React.createContext<any>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
  const [list, setList] = useState([]);
  const [song, setSong] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState();
  const [clickedTime, setClickedTime] = useState(0);
  const [active, setActive] = useState(true);
  const [currentVolume, setCurrentVolume] = useState(0);

  const audio: any = [
    {
      track: 'Lindsey Stirling - The Arena',
      src: 'https://www.mboxdrive.com/lindsey-arena.mp3',
      img:
        'https://www.purederekhough.com/wp-content/uploads/2016/06/Derek-Hough-Lindsey-Stirling-Arena-23.jpg',
      avatar:
        'https://i.pinimg.com/originals/89/c7/e5/89c7e51239fa5bc7a0adf2430b034d2a.jpg',
      artist: 'Lindsey Stirling',
      duration: '4:06'
    },
    {
      track: 'eScala - Palladio',
      src: 'https://www.mboxdrive.com/escala-palladio.mp3',
      img: 'https://i.ytimg.com/vi/bBwa8nqtris/hqdefault.jpg',
      avatar:
        'https://4.bp.blogspot.com/_R9k1W5urJEM/Sh010Qp7-tI/AAAAAAAACBQ/unqJjKJhvPg/w1200-h630-p-k-no-nu/escala10.jpg',
      artist: 'eScala',
      duration: '3:56'
    },
    {
      track: 'Evanscence - Bring Me to Life',
      src: 'https://www.mboxdrive.com/Evanscence-Bring Me to Life.mp3',
      img: 'https://i1.sndcdn.com/artworks-000575750300-d8jycp-t500x500.jpg',
      avatar:
        'https://d2tml28x3t0b85.cloudfront.net/tracks/artworks/000/646/964/original/3e6283.jpeg?1508949731',
      artist: 'Evanscence',
      duration: '3:55'
    },
    {
      track: 'Two Steps From Hell - Rada',
      src: 'https://www.mboxdrive.com/rada.mp3',
      img: 'https://i.ytimg.com/vi/XD6SU_BL9QU/maxresdefault.jpg',
      avatar: 'https://i.ytimg.com/vi/DQb0GE989-4/maxresdefault.jpg',
      artist: 'Two Steps From Hell',
      duration: '4:25'
    }
  ];

  useEffect(() => {
    setList(audio);
  }, []);

  useEffect(() => {}, []);

  const { children } = props;
  return (
    <Context.Provider
      value={{
        list,
        setList,
        song,
        setSong,
        currentTime,
        setCurrentTime,
        durationTime,
        setDurationTime,
        volume,
        setVolume,
        playing,
        setPlaying,
        clickedTime,
        setClickedTime,
        active,
        setActive,
        currentVolume,
        setCurrentVolume
      }}
    >
      {children}
    </Context.Provider>
  );
};

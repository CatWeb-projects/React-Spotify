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

export const list: any = [
  {
    track: 'Lindsey Stirling - The Arena',
    title: 'The Arena',
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
    title: 'Palladio',
    src: 'https://www.mboxdrive.com/escala-palladio.mp3',
    img: 'https://i.ytimg.com/vi/bBwa8nqtris/hqdefault.jpg',
    avatar:
      'https://4.bp.blogspot.com/_R9k1W5urJEM/Sh010Qp7-tI/AAAAAAAACBQ/unqJjKJhvPg/w1200-h630-p-k-no-nu/escala10.jpg',
    artist: 'eScala',
    duration: '3:56'
  },
  {
    track: 'Evanscence - Bring Me to Life',
    title: 'Bring Me to Life',
    src: 'https://www.mboxdrive.com/Evanscence-Bring Me to Life.mp3',
    img: 'https://i1.sndcdn.com/artworks-000575750300-d8jycp-t500x500.jpg',
    avatar:
      'https://d2tml28x3t0b85.cloudfront.net/tracks/artworks/000/646/964/original/3e6283.jpeg?1508949731',
    artist: 'Evanscence',
    duration: '3:55'
  },
  {
    track: 'Two Steps From Hell - Rada',
    title: 'Rada',
    src: 'https://www.mboxdrive.com/rada.mp3',
    img: 'https://i.ytimg.com/vi/XD6SU_BL9QU/maxresdefault.jpg',
    avatar: 'https://i.ytimg.com/vi/DQb0GE989-4/maxresdefault.jpg',
    artist: 'Two Steps From Hell',
    duration: '4:25'
  },
  {
    track: 'Two Steps From Hell - StarSky',
    title: 'StarSky',
    src:
      'https://www.mboxdrive.com/Two_Steps_From_Hell_-_Star_Sky_EXTENDED_Remix_by_Kiko10061980_[www.MP3Fiber.com].mp3',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh4QCGzk0dcDNG7Ot0ehq10cBXFXPKOPh7eA&usqp=CAU',
    avatar: 'https://i.ytimg.com/vi/DQb0GE989-4/maxresdefault.jpg',
    artist: 'Two Steps From Hell',
    duration: '12:08'
  },
  {
    track: 'Skillet - Not Gonna Die',
    title: 'Not Gonna Die',
    src:
      'https://www.mboxdrive.com/skillet_-_not_gonna_die_edit_version_(zaycev.net).mp3',
    img:
      'https://lastfm.freetls.fastly.net/i/u/770x0/9ee07ce19a854fa4b9d6b36295fc702c.jpg',
    avatar: 'https://i1.sndcdn.com/artworks-000283725944-73m4ci-t500x500.jpg',
    artist: 'Skillet',
    duration: '4:45'
  },
  {
    track: 'Skillet - Rise',
    title: 'Rise',
    src:
      'https://www.mboxdrive.com/Skillet_-_Rise_lyric_video[www.MP3Fiber.com].mp3',
    img:
      'https://i.pinimg.com/originals/d5/72/59/d572596e941decd992ad06c4aa9262aa.png',
    avatar: 'https://i1.sndcdn.com/artworks-000283725944-73m4ci-t500x500.jpg',
    artist: 'Skillet',
    duration: '3:47'
  },
  {
    track: 'The Rasmus - Dead Promises',
    title: 'Dead Promises',
    src: 'https://www.mboxdrive.com/The Rasmus-Dead Promises.mp3',
    img: 'https://i.ytimg.com/vi/yVnewlvqqCc/hqdefault.jpg',
    avatar:
      'https://i.pinimg.com/originals/c8/21/ef/c821ef4fb65cd1fda3cfe6743cdf2e73.jpg',
    artist: 'The Rasmus',
    duration: '3:39'
  },
  {
    track: 'Dj Aligator - From Paris To Berlin',
    title: 'From Paris To Berlin',
    src:
      'https://www.mboxdrive.com/DJ Aligator - 14 - Infernal - From Paris To Berlin (DJ Aligator meets Mr. President club mix).mp3',
    img: 'https://m.media-amazon.com/images/I/61v2x52daCL._SS500_.jpg',
    avatar: 'https://www.mtvpersian.net/covers/thumbs2/20131_20131_400.jpg',
    artist: 'Dj Aligator',
    duration: '6:06'
  },
  {
    track: '5Sta Family - Вместе Мы',
    title: 'Вместе Мы',
    src: 'https://www.mboxdrive.com/5sta_family_-_vmeste_my_(zaycev.net).mp3',
    img: 'https://i.ytimg.com/vi/87qSqrGariI/maxresdefault.jpg',
    avatar: 'https://i.ytimg.com/vi/hicCCkeobQQ/maxresdefault.jpg',
    artist: '5Sta Family',
    duration: '3:45'
  }
];

export const ProviderContext = (props: ProviderProps) => {
  const [list, setList] = useState([]);
  const [song, setSong] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(1);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);
  const [active, setActive] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0);
  const [audioFiles, setAudioFiles] = useState<string | undefined>('');
  const [counter, setCounter] = useState<number>(0);
  const [files, setFiles] = useState<any[]>(['']);
  const [repeatOne, setRepeatOne] = useState<any>();
  const [repeatAll, setRepeatAll] = useState<any>();

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
        setCurrentVolume,
        audioFiles,
        setAudioFiles,
        counter,
        setCounter,
        files,
        setFiles,
        repeatOne,
        setRepeatOne,
        repeatAll,
        setRepeatAll
      }}
    >
      {children}
    </Context.Provider>
  );
};

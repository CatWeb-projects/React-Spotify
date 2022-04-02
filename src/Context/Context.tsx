import React, { useState, ReactNode } from 'react';

export interface Audio {
  track: string;
  title: string;
  src: string;
  img: string;
  artist: string;
  duration: string;
  avatar: string;
}

export interface Props {
  song: Audio;
  currentSong: boolean;
  playing: boolean;
  volume: number;
  currentTime: number;
  durationTime: number;
  clickedTime: number;
  currentVolume: number;
  active: boolean;
  audioFiles: string | undefined;
  counter: number;
  files: string[];
  shuffle: boolean;
  repeatOne: boolean;
  repeatAll: boolean;
  profile: boolean;
  setSong: React.Dispatch<React.SetStateAction<Audio>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setDurationTime: React.Dispatch<React.SetStateAction<number>>;
  setClickedTime: React.Dispatch<React.SetStateAction<number>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  setCurrentVolume: React.Dispatch<React.SetStateAction<number>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setAudioFiles: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setFiles: React.Dispatch<React.SetStateAction<string[]>>;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
  setRepeatOne: React.Dispatch<React.SetStateAction<boolean>>;
  setRepeatAll: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentSong: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
  children: ReactNode;
}

const defaultValue = {
  song: {
    track: '',
    src: '',
    img: '',
    artist: '',
    duration: '',
    avatar: '',
    title: ''
  },
  playing: false,
  currentTime: 0,
  durationTime: 1,
  clickedTime: 0,
  volume: 0.5,
  currentVolume: 0,
  active: false,
  audioFiles: '',
  counter: 0,
  files: [''],
  shuffle: false,
  repeatOne: false,
  repeatAll: false,
  profile: false,
  currentSong: false,
  setSong: () => {},
  setCurrentTime: () => {},
  setDurationTime: () => {},
  setClickedTime: () => {},
  setPlaying: () => {},
  setVolume: () => {},
  setCurrentVolume: () => {},
  setActive: () => {},
  setAudioFiles: () => {},
  setCounter: () => {},
  setFiles: () => {},
  setShuffle: () => {},
  setRepeatOne: () => {},
  setRepeatAll: () => {},
  setProfile: () => {},
  setCurrentSong: () => {}
};

export const Context = React.createContext<Props>(defaultValue);

export const list = [
  {
    track: 'Lindsey Stirling - The Arena',
    title: 'The Arena',
    src: './music/Linsdsey Stirling - The Arena.mp3',
    img: 'https://www.purederekhough.com/wp-content/uploads/2016/06/Derek-Hough-Lindsey-Stirling-Arena-23.jpg',
    avatar:
      'https://i.pinimg.com/originals/89/c7/e5/89c7e51239fa5bc7a0adf2430b034d2a.jpg',
    artist: 'Lindsey Stirling',
    duration: '4:07'
  },
  {
    track: 'eScala - Palladio',
    title: 'Palladio',
    src: './music/Escala - Palladio.mp3',
    img: 'https://i.ytimg.com/vi/bBwa8nqtris/hqdefault.jpg',
    avatar:
      'https://4.bp.blogspot.com/_R9k1W5urJEM/Sh010Qp7-tI/AAAAAAAACBQ/unqJjKJhvPg/w1200-h630-p-k-no-nu/escala10.jpg',
    artist: 'eScala',
    duration: '3:57'
  },
  {
    track: 'Evanscence - Bring Me to Life',
    title: 'Bring Me to Life',
    src: './music/Evanscence-Bring Me to Life.mp3',
    img: 'https://i1.sndcdn.com/artworks-000575750300-d8jycp-t500x500.jpg',
    avatar:
      'https://www.soyuz.ru/public/uploads/files/2/7319647/20190514233313ed3901b9e4.jpg',
    artist: 'Evanscence',
    duration: '3:56'
  },
  {
    track: 'Game of Thrones - Winter Has Come',
    title: 'Winter Has Come',
    src: './music/Game of Thrones - Winter Has Come.mp3',
    img: 'https://images.hdqwalls.com/wallpapers/game-of-thrones-winter-has-come-artwork-4k-hm.jpg',
    avatar:
      'https://www.prime1studio.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/u/p/upmgot-03_a22.jpg',
    artist: 'Game of Thrones',
    duration: '6:57'
  },
  {
    track: 'Two Steps From Hell - StarSky',
    title: 'StarSky',
    src: './music/Two Stepts From Hell - StarSky Extended.mp3',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh4QCGzk0dcDNG7Ot0ehq10cBXFXPKOPh7eA&usqp=CAU',
    avatar: 'https://i.ytimg.com/vi/DQb0GE989-4/maxresdefault.jpg',
    artist: 'Two Steps From Hell',
    duration: '5:31'
  },
  {
    track: 'Skillet - Not Gonna Die',
    title: 'Not Gonna Die',
    src: './music/Skillet - Not Gonna Die(edited version).mp3',
    img: 'https://lastfm.freetls.fastly.net/i/u/770x0/9ee07ce19a854fa4b9d6b36295fc702c.jpg',
    avatar: 'https://i1.sndcdn.com/artworks-000283725944-73m4ci-t500x500.jpg',
    artist: 'Skillet',
    duration: '4:46'
  },
  {
    track: 'Skillet - What I Believe',
    title: 'Rise',
    src: './music/Skillet- What I believe.mp3',
    img: 'https://i.ytimg.com/vi/O1llOfFkFmU/maxresdefault.jpg',
    avatar: 'https://i1.sndcdn.com/artworks-000283725944-73m4ci-t500x500.jpg',
    artist: 'Skillet',
    duration: '3:16'
  },
  {
    track: 'The Rasmus - Dead Promises',
    title: 'Dead Promises',
    src: 'https://media1.vocaroo.com/mp3/15rt6q1ebtws',
    img: 'https://i.ytimg.com/vi/yVnewlvqqCc/hqdefault.jpg',
    avatar:
      'https://i.pinimg.com/originals/c8/21/ef/c821ef4fb65cd1fda3cfe6743cdf2e73.jpg',
    artist: 'The Rasmus',
    duration: '3:39'
  },
  {
    track: 'Dj Aligator - From Paris To Berlin',
    title: 'From Paris To Berlin',
    src: 'https://media1.vocaroo.com/mp3/1jkjZXeUmhhy',
    img: 'https://media.hitparade.ch/cover/big/infernal-from_paris_to_berlin_s_5.jpg',
    avatar: 'https://www.mtvpersian.net/covers/thumbs2/20131_20131_400.jpg',
    artist: 'Dj Aligator',
    duration: '6:06'
  },
  {
    track: '5Sta Family - Вместе Мы',
    title: 'Вместе Мы',
    src: 'https://media1.vocaroo.com/mp3/1hsYhJHg9mjO',
    img: 'https://i.ytimg.com/vi/87qSqrGariI/maxresdefault.jpg',
    avatar: 'https://i.ytimg.com/vi/hicCCkeobQQ/maxresdefault.jpg',
    artist: '5Sta Family',
    duration: '3:45'
  },
  {
    track: 'Ava Max - Kings & Queens',
    title: 'Kings & Queens',
    src: 'https://media1.vocaroo.com/mp3/1915LLwGXi7b',
    img: 'https://i.ytimg.com/vi/q6LhCim5y_Y/maxresdefault.jpg',
    avatar:
      'https://younghollywood.com/images/stories/avamaxkingsandqueens.jpg',
    artist: 'Ava Max',
    duration: '2:42'
  },
  {
    track: 'Johann Sebastian Bach - Badinerie',
    title: 'Badinerie',
    src: 'https://media1.vocaroo.com/mp3/18ZBT9oZaf95',
    img: 'https://d1iiivw74516uk.cloudfront.net/eyJidWNrZXQiOiJwcmVzdG8tY292ZXItaW1hZ2VzIiwia2V5IjoiNzAzMjExOS4xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwfSwianBlZyI6eyJxdWFsaXR5Ijo2NX0sInRvRm9ybWF0IjoianBlZyJ9LCJ0aW1lc3RhbXAiOjE1NDk1MzQyMDl9',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg',
    artist: 'Johann Sebastian Bach',
    duration: '1:27'
  }
];

export const ProviderContext = (props: ProviderProps) => {
  const [song, setSong] = useState({
    track: '',
    src: '',
    img: '',
    artist: '',
    duration: '',
    avatar: '',
    title: ''
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(1);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);
  const [active, setActive] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0);
  const [audioFiles, setAudioFiles] = useState<string | undefined>('');
  const [counter, setCounter] = useState(0);
  const [files, setFiles] = useState(['']);
  const [repeatOne, setRepeatOne] = useState(false);
  const [repeatAll, setRepeatAll] = useState(false);
  const [profile, setProfile] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [currentSong, setCurrentSong] = useState(false);

  const { children } = props;
  return (
    <Context.Provider
      value={{
        song,
        setSong,
        currentSong,
        setCurrentSong,
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
        setRepeatAll,
        profile,
        setProfile,
        shuffle,
        setShuffle
      }}
    >
      {children}
    </Context.Provider>
  );
};

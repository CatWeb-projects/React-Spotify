import React from 'react';
import { ResumeButton } from 'ui/atoms/ResumeButton/ResumeButton';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';

interface Audio {
  track: string;
  src: string;
  img: string;
  artist: string;
  duration: string;
}
export const AudioList = () => {
  const audio: Audio[] = [
    {
      track: 'Lindsey Stirling - The Arena',
      src: 'lindsey-arena.mp3',
      img: 'https://i.ytimg.com/vi/4MCjU-Du3eI/hqdefault.jpg',
      artist: 'Lindsey Stirling',
      duration: '4:06'
    },
    {
      track: 'eScala - Palladio',
      src: 'escala-palladio.mp3',
      img: 'https://i.ytimg.com/vi/bBwa8nqtris/hqdefault.jpg',
      artist: 'eScala',
      duration: '3:56'
    },
    {
      track: 'Evanscence - Bring Me to Life',
      src: 'Evanscence - Bring Me to Life.mp3',
      img: 'https://i1.sndcdn.com/artworks-000575750300-d8jycp-t500x500.jpg',
      artist: 'Evanscence',
      duration: '3:55'
    },
    {
      track: 'Two Steps From Hell - Rada',
      src: 'Two Steps From Hell - Rada.mp3',
      img: 'https://i.ytimg.com/vi/XD6SU_BL9QU/maxresdefault.jpg',
      artist: 'Two Steps From Hell',
      duration: '4:25'
    }
  ];
  return (
    <div className="music">
      <ResumeButton />
      <div className="tracks-nr">
        <span>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Track</span>
        <span>L.</span>
      </div>
      <ul className="audio-list">
        {audio &&
          audio.map((item: Audio) => (
            <li key={item.track}>
              <CircleButton />
              <a href={item.src}>{item.track}</a>
              <span>{item.duration}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

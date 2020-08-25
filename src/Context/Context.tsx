import React, { useState, useEffect } from 'react';

const defaultValue = {};

export const Context = React.createContext<any>(defaultValue);

export const ProviderContext = (props: any) => {
  const [list, setList] = useState<any>([]);
  const [song, setSong] = useState<any>();
  const audio: any = [
    {
      track: 'Lindsey Stirling - The Arena',
      src: 'lindsey-arena.mp3',
      img:
        'https://www.purederekhough.com/wp-content/uploads/2016/06/Derek-Hough-Lindsey-Stirling-Arena-23.jpg',
      avatar:
        'https://i.pinimg.com/originals/89/c7/e5/89c7e51239fa5bc7a0adf2430b034d2a.jpg',
      artist: 'Lindsey Stirling',
      duration: '4:06'
    },
    {
      track: 'eScala - Palladio',
      src: 'escala-palladio.mp3',
      img: 'https://i.ytimg.com/vi/bBwa8nqtris/hqdefault.jpg',
      avatar:
        'https://4.bp.blogspot.com/_R9k1W5urJEM/Sh010Qp7-tI/AAAAAAAACBQ/unqJjKJhvPg/w1200-h630-p-k-no-nu/escala10.jpg',
      artist: 'eScala',
      duration: '3:56'
    },
    {
      track: 'Evanscence - Bring Me to Life',
      src: 'Evanscence - Bring Me to Life.mp3',
      img: 'https://i1.sndcdn.com/artworks-000575750300-d8jycp-t500x500.jpg',
      avatar:
        'https://d2tml28x3t0b85.cloudfront.net/tracks/artworks/000/646/964/original/3e6283.jpeg?1508949731',
      artist: 'Evanscence',
      duration: '3:55'
    },
    {
      track: 'Two Steps From Hell - Rada',
      src: 'Two Steps From Hell - Rada.mp3',
      img: 'https://i.ytimg.com/vi/XD6SU_BL9QU/maxresdefault.jpg',
      avatar: 'https://i.ytimg.com/vi/DQb0GE989-4/maxresdefault.jpg',
      artist: 'Two Steps From Hell',
      duration: '4:25'
    }
  ];

  useEffect(() => {
    setList(audio);
  }, []);

  const { children } = props;
  return (
    <Context.Provider value={{ list, setList, song, setSong }}>
      {children}
    </Context.Provider>
  );
};

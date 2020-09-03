import React, { useContext, useEffect } from 'react';
import { Context } from 'Context/Context';
import { useParams } from 'react-router-dom';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import 'ui/organims/SongProfile/SongProfile.scss';

export const SongProfile = () => {
  const { list, song, setSong, audioFiles, setAudioFiles } = useContext<any>(
    Context
  );

  const match = useParams<{ name: string }>();
  useEffect(() => {
    list.filter((item: any) =>
      item.track === match.name ? setSong(item) : false
    );
    list.filter((item: any) =>
      item.track === match.name ? setAudioFiles(item.src) : false
    );
  }, [list, match]);

  return (
    <div className="profile">
      <div className="profile__img">
        <img src={song ? song.img : ''} alt="" />
        <CircleButton src={song ? song.src : ''} />
      </div>
      <div className="profile__info">
        <span>Explicit</span>
        <h1>{song ? song.artist : ''}</h1>
        <div className="profile__avatar">
          <img src={song ? song.avatar : ''} alt="" />
          <span>{song ? song.track : ''}</span>
        </div>
      </div>
    </div>
  );
};

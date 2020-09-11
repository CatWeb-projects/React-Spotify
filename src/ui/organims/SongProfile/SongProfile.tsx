import React, { useContext, useEffect } from 'react';
import { Context, list } from 'Context/Context';
import { useParams } from 'react-router-dom';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import 'ui/organims/SongProfile/SongProfile.scss';

export const SongProfile = () => {
  const { song, setSong, setAudioFiles, setProfile } = useContext<any>(Context);
  const classType = '_svg-play';
  const typeCircleButton = 'profile';
  const match = useParams<{ name: string }>();

  useEffect(() => {
    setProfile(true);
  }, []);

  useEffect(() => {
    list.filter((item) => (item.track === match.name ? setSong(item) : false));
    list.filter((item) =>
      item.track === match.name ? setAudioFiles(item.src) : false
    );
  }, [list, song, match]);

  return (
    <div className="profile">
      <div className="profile__img">
        <img
          src={
            song
              ? song.img
              : 'https://st2.depositphotos.com/2075965/6365/v/950/depositphotos_63653511-stock-illustration-abstract-colorful-music-notes.jpg'
          }
          alt=""
        />
        <CircleButton
          src={song ? song.src : ''}
          classType={classType}
          type={typeCircleButton}
        />
      </div>
      <div className="profile__info">
        <span>Explicit</span>
        <h1>{song ? song.artist : 'No Artist'}</h1>
        <div className="profile__avatar">
          <img
            src={
              song
                ? song.avatar
                : 'https://png.pngtree.com/png-clipart/20190603/original/pngtree-saxophone-with-musical-notes-background-color-vector-material-png-image_61962.jpg'
            }
            alt=""
          />
          <span>{song ? song.track : 'No Track Title'}</span>
        </div>
      </div>
    </div>
  );
};

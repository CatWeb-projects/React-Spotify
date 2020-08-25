import React, { useContext } from 'react';
import { ResumeButton } from 'ui/atoms/ResumeButton/ResumeButton';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import { Context } from 'Context/Context';
import { Link } from 'react-router-dom';

interface Audio {
  track: string;
  src: string;
  img: string;
  artist: string;
  duration: string;
}
export const AudioList = () => {
  const { list } = useContext<any>(Context);
  return (
    <div className="music">
      <ResumeButton />
      <div className="tracks-nr">
        <span>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Track</span>
        <span>L.</span>
      </div>
      <ul className="audio-list">
        {list &&
          list.map((item: Audio) => (
            <li key={item.track}>
              <CircleButton />
              <Link to={`/${item.track}`}>{item.track}</Link>
              <span>{item.duration}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

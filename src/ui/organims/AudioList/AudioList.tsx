import React, { useContext } from 'react';
import { ResumeButton } from 'ui/atoms/ResumeButton/ResumeButton';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import { Context } from 'Context/Context';
import { Link } from 'react-router-dom';

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
          list.map((item: any, i: number) => (
            <li key={item.track}>
              <CircleButton src={item.src} id={i} />
              <Link to={`/${item.track}`}>{item.track} </Link>
              <span>{item.duration}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

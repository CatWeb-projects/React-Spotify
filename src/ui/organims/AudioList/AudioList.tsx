import React from 'react';
import { ResumeButton } from 'ui/atoms/ResumeButton/ResumeButton';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import { list } from 'Context/Context';
import { Link } from 'react-router-dom';

export const AudioList = () => {
  const classType = '';
  const typeCircleButton = '';

  return (
    <div className="music">
      <ResumeButton />
      <div className="tracks-nr">
        <span>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Track</span>
        <span>L.</span>
      </div>
      <ul className="audio-list">
        {list &&
          list.map((item, i: number) => (
            <li key={i}>
              <CircleButton
                src={item.src}
                id={i}
                classType={classType}
                type={typeCircleButton}
              />
              <Link to={`/${item.track}`}>{item.track} </Link>
              <span>{item.duration}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

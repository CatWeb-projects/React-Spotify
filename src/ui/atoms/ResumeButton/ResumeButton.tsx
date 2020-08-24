import React, { useState } from 'react';

export const ResumeButton = ({ children }: any) => {
  const [active, setActive] = useState<boolean>(false);

  const type = 'resume';

  const play = (e: any) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <div className="resume-button-div">
      {active ? (
        <button onClick={play} className={`resume-button-div__button-${type}`}>
          <svg
            className="svg-icon svg-icon-pause-circle"
            focusable="false"
            height="12"
            width="12"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path d="M6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12zm0-1A5 5 0 1 0 6 1a5 5 0 0 0 0 10zM4.665 4h.67c.091 0 .165.075.165.167v3.666A.167.167 0 0 1 5.335 8h-.67a.166.166 0 0 1-.165-.167V4.167c0-.092.075-.167.165-.167zm1.835.167c0-.092.075-.167.165-.167h.67c.091 0 .165.075.165.167v3.666A.167.167 0 0 1 7.335 8h-.67a.166.166 0 0 1-.165-.167V4.167z"></path>
          </svg>
          Stop
        </button>
      ) : (
        <button onClick={play}>
          <svg
            className="svg-icon svg-icon-play-circle"
            focusable="false"
            height="12"
            width="12"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm0 1A6 6 0 1 1 6 0a6 6 0 0 1 0 12zM4.937 4.017a.125.125 0 0 0-.187.108v3.75c0 .096.104.156.187.108l3.25-1.875a.125.125 0 0 0 0-.216l-3.25-1.875z"></path>
          </svg>
          Resume
        </button>
      )}
    </div>
  );
};

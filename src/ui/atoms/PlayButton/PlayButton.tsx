import React from 'react';

export const PlayButton = () => {
  return (
    <div className="play-button">
      <button>
        <svg
          className="svg-icon svg-icon-play"
          focusable="false"
          height="1em"
          width="1em"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2.5.5v11l9-5.5z"></path>
        </svg>
      </button>
    </div>
  );
};

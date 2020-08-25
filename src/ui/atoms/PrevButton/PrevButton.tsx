import React from 'react';

export const PrevButton = () => {
  return (
    <div className="prev-button">
      <button>
        <svg
          className="svg-icon svg-icon-prev"
          focusable="false"
          height="1em"
          width="1em"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2 5.397V.5a.5.5 0 1 0-1 0v11a.5.5 0 1 0 1 0V6.597L11 12V0L2 5.397z"></path>
        </svg>
      </button>
    </div>
  );
};

import React, { useState, useContext, useEffect, useCallback } from 'react';
import ReactTooltip from 'react-tooltip';
import { Context } from 'Context/Context';

export const ShuffleButton = () => {
  const [active, setActive] = useState<boolean>(false);
  const { setShuffle, shuffle } = useContext(Context);
  const changes = useCallback(() => {
    setActive(!active);
  }, [active, shuffle]);

  useEffect(() => {
    if (active) {
      setShuffle(true);
    } else {
      setShuffle(false);
    }
    // eslint-disable-next-line
  }, [active]);

  return (
    <div className="shuffle-option">
      <button
        aria-label="Turn on Shuffle"
        data-tip=""
        data-for="shuffle"
        onClick={changes}
      >
        <svg
          className={`${active ? 'svg_shuffle_active' : 'svg_shuffle'}`}
          focusable="false"
          height="1em"
          width="1em"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M9.333 9.214h-.666C6.826 9.214 5.333 7.775 5.333 6c0-1.066-.894-1.929-2-1.929H.683C.298 4.071 0 3.784 0 3.43c0-.356.298-.643.667-.729.137 
            0 2.65.01 2.666 0 1.841.086 3.334 1.525 3.334 3.3 0 1.065.896 1.929 2 1.929h3c.185 0 .333.143.333.321v.321L9.333 10.5V9.214zm-.666-5.143c-.367 
            0-.708.103-1.004.27a4.497 4.497 0 0 0-.672-1.104c.493-.28 1.062-.451 1.709-.537.013.03.51 0 .6 0V1.5L12 3.429v.321a.327.327 0 0 
            1-.333.321h-3zM3.333 7.93c.369 0 .709-.103 1.004-.27.168.404.4.767.672 1.104-.493.28-1.062.451-1.676.537-.018-.011-2.435 0-2.666 0C.298 9.214 0 8.927 0 8.571c0-.355.298-.642.667-.642h2.666z"
          ></path>
        </svg>
      </button>
      <ReactTooltip
        id="shuffle"
        className="shuffle-tooltip"
        overridePosition={() => ({ left: 0, top: 0 })}
      >
        <span> {!active ? 'Turn on Shuffle' : 'Turn off Shuffle'}</span>
      </ReactTooltip>
    </div>
  );
};

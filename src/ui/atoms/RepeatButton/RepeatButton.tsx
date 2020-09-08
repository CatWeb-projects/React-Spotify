import React, { useState, useContext, useEffect, useCallback } from 'react';
import ReactTooltip from 'react-tooltip';
import { Context } from 'Context/Context';

export const RepeatButton = () => {
  const [active, setActive] = useState<number>(0);
  const { repeatOne, repeatAll, setRepeatAll, setRepeatOne } = useContext(
    Context
  );

  const changes = useCallback(() => {
    setActive((active) => active + 1);
    if (active === 1) {
      setRepeatAll(true);
      setRepeatOne(false);
    } else {
      setRepeatAll(false);
    }
    if (active === 2) {
      setRepeatOne(true);
      setRepeatAll(false);
    } else {
      setRepeatOne(false);
    }
  }, [active, setActive, setRepeatAll, setRepeatOne]);

  useEffect(() => {
    if (active > 2) {
      setActive(0);
      setRepeatOne(false);
    }
    if (active === 1) {
      setRepeatAll(true);
    }
    if (active === 2) {
      setRepeatOne(true);
    }
  }, [active, repeatAll, repeatOne]);

  const tooltipText = useCallback(() => {
    if (active > 0) {
      if (active === 1) {
        return 'Repeat the current track';
      }
      if (active === 2) {
        return 'Turn off repeat';
      }
    }
    return 'Repeat all track in list';
  }, [active]);

  return (
    <div className="repeat-option">
      <button
        aria-label="Repeat all tracks in list"
        data-tip=""
        data-for="repeat"
        onClick={changes}
      >
        <svg
          className={`${active > 0 ? 'svg_repeat_active' : 'svg_repeat'}`}
          viewBox="0 0 12 12"
        >
          <path
            d={
              active === 2
                ? 'M9.573 6.64c-1.34 0-2.427-1.15-2.427-2.57S8.233 1.5 9.573 1.5 12 2.65 12 4.07s-1.087 2.57-2.427 2.57zm.672-4.14h-.598c-.077.173-.324.562-.892.738v.628c.443-.12.672-.33.76-.4V5.3h.73V2.5zM3 4.072c-.995 0-1.8.863-1.8 1.929 0 1.064.805 1.928 1.8 1.928h.3c.165 0 .3.143.3.321v.643c0 .177-.135.321-.3.321H3c-1.657 0-3-1.439-3-3.213 0-1.776 1.343-3.214 3-3.214h.6V1.5L6 3.43v.321c0 .177-.135.321-.3.321H3zM7.5 7.93c.252 0 .75-.061 1.003-.162.02-.007.052-.023.052-.023h1.684c-.544.933-1.43 1.47-2.439 1.47h-.6V10.5L4.8 8.572V8.25c0-.178.134-.321.3-.321h2.4z'
                : 'M8.667 9.214H8V10.5L5.333 8.571V8.25c0-.178.149-.321.334-.321h3c1.104 0 2-.864 2-1.929 0-1.066-.896-1.929-2-1.929h-.334A.327.327 0 0 1 8 3.75v-.643c0-.178.148-.321.333-.321h.334C10.507 2.786 12 4.225 12 6s-1.493 3.214-3.333 3.214zM6.333 4.071h-3c-1.105 0-2 .863-2 1.929 0 1.065.895 1.929 2 1.929h.334c.183 0 .333.143.333.321v.643c0 .177-.15.321-.333.321h-.334C1.493 9.214 0 7.775 0 6s1.493-3.214 3.333-3.214H4V1.5l2.667 1.929v.321c0 .177-.15.321-.334.321z'
            }
          ></path>
        </svg>
      </button>
      <ReactTooltip
        id="repeat"
        className="repeat-tooltip"
        overridePosition={() => ({ left: 0, top: 0 })}
      >
        <span>{tooltipText()}</span>
      </ReactTooltip>
    </div>
  );
};

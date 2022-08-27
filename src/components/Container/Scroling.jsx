import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

// eslint-disable-next-line
const Scroling = ({ children, style }) => {
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current)
      scrollReveal().reveal(divRef.current, {
        reset: false,
        delay: 100,
        distance: '1000px',
        origin: 'left',
      });
  }, []);

  return (
    <div ref={divRef} style={style} className="" data-testid="section">
      {children}
    </div>
  );
};

// you can check scrolling like this:
document.onscroll = function () {
  //console.log('scrawwwwl');
};

export default Scroling;

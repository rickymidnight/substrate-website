import * as React from 'react';

function SvgElement(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fill="#fff"
        d="M9 23.5a1.5 1.5 0 001.5 1.5c5.521 0 10-4.479 10-10a1.5 1.5 0 10-3 0c0 3.864-3.136 7-7 7A1.5 1.5 0 009 23.5zM16 1.5A1.5 1.5 0 0014.5 0c-5.521 0-10 4.479-10 10a1.5 1.5 0 103 0c0-3.864 3.136-7 7-7A1.5 1.5 0 0016 1.5zM1.5 9A1.5 1.5 0 000 10.5c0 5.521 4.479 10 10 10a1.5 1.5 0 100-3c-3.864 0-7-3.136-7-7A1.5 1.5 0 001.5 9zM23.5 16a1.5 1.5 0 001.5-1.5c0-5.521-4.479-10-10-10a1.5 1.5 0 100 3c3.864 0 7 3.136 7 7a1.5 1.5 0 001.5 1.5z"
      />
    </svg>
  );
}

export default SvgElement;

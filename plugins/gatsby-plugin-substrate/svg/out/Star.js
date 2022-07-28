import * as React from 'react';

function SvgStar(props) {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" {...props}>
      <path
        fillRule="evenodd"
        d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM8.84528 8.45401L10.3417 5.26814C10.6122 4.69305 11.389 4.70026 11.6572 5.26814L13.1536 8.45401L16.5017 8.96655C17.1021 9.05798 17.3428 9.8352 16.9074 10.2804L14.4851 12.7588L15.058 16.2599C15.1611 16.8927 14.5263 17.3644 13.9947 17.0708L10.9994 15.4177L8.00423 17.0708C7.47257 17.3668 6.83778 16.8927 6.9409 16.2599L7.51382 12.7588L5.09153 10.2804C4.65611 9.8352 4.89673 9.05798 5.49715 8.96655L8.84528 8.45401Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStar;

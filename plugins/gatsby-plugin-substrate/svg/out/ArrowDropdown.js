import * as React from 'react';

function SvgArrowDropdown(props) {
  return (
    <svg width={16} height={16} preserveAspectRatio="xMinYMin" viewBox="-5 -8 24 24" {...props}>
      <path d="M7.071 5.314l4.95-4.95a1 1 0 111.414 1.414L7.778 7.435a1 1 0 01-1.414 0L.707 1.778A1 1 0 112.121.364l4.95 4.95z" />
    </svg>
  );
}

export default SvgArrowDropdown;

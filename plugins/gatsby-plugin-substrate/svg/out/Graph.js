import * as React from 'react';

function SvgGraph(props) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <path
        fill="#24CC85"
        d="M28.571 0H3.43A3.43 3.43 0 000 3.429V28.57A3.43 3.43 0 003.429 32H28.57A3.43 3.43 0 0032 28.571V3.43A3.43 3.43 0 0028.571 0zM11.43 24c0 .631-.512 1.143-1.143 1.143H8A1.143 1.143 0 016.857 24v-9.143c0-.631.512-1.143 1.143-1.143h2.286c.631 0 1.143.512 1.143 1.143V24zm6.857 0c0 .631-.512 1.143-1.143 1.143h-2.286A1.143 1.143 0 0113.714 24V8c0-.631.512-1.143 1.143-1.143h2.286c.631 0 1.143.512 1.143 1.143v16zm6.857 0c0 .631-.512 1.143-1.143 1.143h-2.286A1.143 1.143 0 0120.571 24v-4.571c0-.632.512-1.143 1.143-1.143H24c.631 0 1.143.511 1.143 1.143V24z"
      />
    </svg>
  );
}

export default SvgGraph;

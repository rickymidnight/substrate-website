import * as React from 'react';

function SvgReddit(props) {
  return (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 30 30" {...props}>
      <path fill="currentColor" d="M30.001 15a15 15 0 11-30-.001 15 15 0 0130 .001z" />
      <path
        fill="currentColor"
        d="M24.996 15a2.185 2.185 0 00-3.704-1.57c-1.496-1.079-3.556-1.776-5.85-1.856l.997-4.692 3.255.693a1.565 1.565 0 10.16-.766l-3.636-.772a.384.384 0 00-.403.16.392.392 0 00-.06.141l-1.113 5.231c-2.328.065-4.422.765-5.935 1.853a2.186 2.186 0 10-2.408 3.572c-.034.219-.052.44-.053.661 0 3.365 3.918 6.095 8.75 6.095s8.75-2.73 8.75-6.095c0-.22-.017-.44-.05-.657a2.188 2.188 0 001.3-1.998zM10 16.564a1.562 1.562 0 113.125 0 1.562 1.562 0 01-3.125 0zm8.713 4.128c-1.067 1.065-3.11 1.148-3.71 1.148-.601 0-2.645-.085-3.711-1.148a.405.405 0 01.573-.573c.672.673 2.11.911 3.137.911 1.028 0 2.467-.238 3.14-.91a.405.405 0 11.57.572zm-.275-2.566a1.563 1.563 0 110-3.125 1.563 1.563 0 010 3.125z"
      />
    </svg>
  );
}

export default SvgReddit;

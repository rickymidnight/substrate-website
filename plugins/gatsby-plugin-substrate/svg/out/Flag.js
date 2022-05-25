import * as React from 'react';

function SvgFlag(props) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <path
        fill="#24CC85"
        fillRule="evenodd"
        d="M3.429 32H28.57A3.429 3.429 0 0032 28.571V3.43A3.429 3.429 0 0028.571 0H3.43A3.429 3.429 0 000 3.429V28.57A3.429 3.429 0 003.429 32z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M9.179 16.017l1.602.71a1.266 1.266 0 00.981.018l.504-.2a1.263 1.263 0 00.74-.806l.364-1.204a.94.94 0 01.495-.615l.872-.435v1.977a1.88 1.88 0 01-1.046 1.687l-2.257 1.125a3.134 3.134 0 00-1.743 2.811v.571h12.614v-7.543c0-4.164-3.388-7.543-7.568-7.543H8.903a.474.474 0 00-.473.472c0 .103.024.205.07.298l.56 1.116-.354.354a.943.943 0 00-.276.667v5.39a1.254 1.254 0 00.749 1.15zm1.301-5.675a.79.79 0 01.729.485.782.782 0 01-.171.856.79.79 0 01-1.346-.556.784.784 0 01.788-.785zm12.462 12.571H9.06a.632.632 0 00-.631.629v1.257a.628.628 0 00.63.628h13.882a.632.632 0 00.63-.628v-1.257a.627.627 0 00-.63-.629z"
      />
      <rect width={32} height={32} fill="#24CC85" rx={4} />
      <path
        fill="#fff"
        d="M7.188 7C6.53 7 6 7.533 6 8.189v17.218c0 .327.267.594.594.594H7.78a.595.595 0 00.594-.594V8.188c0-.656-.53-1.187-1.188-1.187zm15.979.157c-6.357 3.24-5.834-2.464-13.605 1.046V21.25c6.892-3.421 8.228 1.978 14.752-.857.422-.186.686-.612.686-1.069V8.144c0-.932-.994-1.414-1.833-.987z"
      />
    </svg>
  );
}

export default SvgFlag;

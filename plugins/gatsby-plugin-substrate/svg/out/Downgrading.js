import * as React from 'react';

function SvgDowngrading(props) {
  return (
    <svg width={500} height={500} fill="none" viewBox="0 0 500 500" {...props}>
      <g clipPath="url(#downgrading_svg__clip0_1083_14350)">
        <path
          fill="#828282"
          fillOpacity={0.7}
          d="M298.128 297.426C297.701 298.551 297.505 299.751 297.553 300.953V338.061C297.505 339.263 297.701 340.463 298.128 341.588 298.555 342.713 299.206 343.74 300.039 344.608 300.873 345.475 301.874 346.166 302.981 346.637 304.088 347.109 305.279 347.352 306.483 347.352 307.686 347.352 308.877 347.109 309.984 346.637 311.091 346.166 312.092 345.475 312.926 344.608 313.76 343.74 314.41 342.713 314.837 341.588 315.264 340.463 315.46 339.263 315.412 338.061V300.953C315.46 299.751 315.264 298.551 314.837 297.426 314.41 296.301 313.76 295.274 312.926 294.406 312.092 293.539 311.091 292.848 309.984 292.377 308.877 291.905 307.686 291.662 306.483 291.662 305.279 291.662 304.088 291.905 302.981 292.377 301.874 292.848 300.873 293.539 300.039 294.406 299.206 295.274 298.555 296.301 298.128 297.426zM326.187 302.232C325.76 303.357 325.564 304.557 325.612 305.759V342.867C325.564 344.069 325.76 345.269 326.187 346.394 326.614 347.519 327.264 348.546 328.098 349.414 328.932 350.281 329.932 350.971 331.04 351.443 332.147 351.914 333.338 352.157 334.541 352.157 335.745 352.157 336.936 351.914 338.043 351.443 339.15 350.971 340.151 350.281 340.984 349.414 341.818 348.546 342.468 347.519 342.896 346.394 343.323 345.269 343.519 344.069 343.471 342.867V305.759C343.519 304.557 343.323 303.357 342.896 302.232 342.468 301.107 341.818 300.08 340.984 299.212 340.151 298.345 339.15 297.654 338.043 297.183 336.936 296.711 335.745 296.468 334.541 296.468 333.338 296.468 332.147 296.711 331.04 297.183 329.932 297.654 328.932 298.345 328.098 299.212 327.264 300.08 326.614 301.107 326.187 302.232zM185.893 297.426C185.466 298.551 185.27 299.751 185.318 300.953V338.061C185.27 339.263 185.466 340.463 185.893 341.588 186.32 342.713 186.97 343.74 187.804 344.608 188.638 345.475 189.639 346.166 190.746 346.637 191.853 347.109 193.044 347.352 194.248 347.352 195.451 347.352 196.642 347.109 197.749 346.637 198.856 346.166 199.857 345.475 200.691 344.608 201.525 343.74 202.175 342.713 202.602 341.588 203.029 340.463 203.225 339.263 203.177 338.061V300.953C203.225 299.751 203.029 298.551 202.602 297.426 202.175 296.301 201.525 295.274 200.691 294.406 199.857 293.539 198.856 292.848 197.749 292.377 196.642 291.905 195.451 291.662 194.248 291.662 193.044 291.662 191.853 291.905 190.746 292.377 189.639 292.848 188.638 293.539 187.804 294.406 186.97 295.274 186.32 296.301 185.893 297.426zM157.259 305.759C157.211 304.557 157.407 303.357 157.834 302.232 158.262 301.107 158.912 300.08 159.746 299.212 160.579 298.345 161.58 297.654 162.687 297.183 163.794 296.711 164.985 296.468 166.189 296.468 167.392 296.468 168.583 296.711 169.69 297.183 170.797 297.654 171.798 298.345 172.632 299.212 173.466 300.08 174.116 301.107 174.543 302.232 174.97 303.357 175.166 304.557 175.118 305.759V342.867C175.166 344.069 174.97 345.269 174.543 346.394 174.116 347.519 173.466 348.546 172.632 349.414 171.798 350.281 170.797 350.971 169.69 351.443 168.583 351.914 167.392 352.157 166.189 352.157 164.985 352.157 163.794 351.914 162.687 351.443 161.58 350.971 160.579 350.281 159.746 349.414 158.912 348.546 158.262 347.519 157.834 346.394 157.407 345.269 157.211 344.069 157.259 342.867V305.759zM466.481 346.694C466.053 347.819 465.858 349.018 465.905 350.221V387.328C465.858 388.531 466.053 389.731 466.481 390.856 466.908 391.981 467.558 393.008 468.392 393.875 469.226 394.743 470.226 395.433 471.334 395.905 472.441 396.376 473.632 396.619 474.835 396.619 476.039 396.619 477.23 396.376 478.337 395.905 479.444 395.433 480.444 394.743 481.278 393.875 482.112 393.008 482.762 391.981 483.19 390.856 483.617 389.731 483.813 388.531 483.765 387.328V350.221C483.813 349.018 483.617 347.819 483.19 346.694 482.762 345.569 482.112 344.542 481.278 343.674 480.444 342.806 479.444 342.116 478.337 341.645 477.23 341.173 476.039 340.93 474.835 340.93 473.632 340.93 472.441 341.173 471.334 341.645 470.226 342.116 469.226 342.806 468.392 343.674 467.558 344.542 466.908 345.569 466.481 346.694zM437.847 337.803C437.799 336.601 437.995 335.401 438.422 334.276 438.849 333.151 439.499 332.124 440.333 331.256 441.167 330.389 442.168 329.698 443.275 329.227 444.382 328.755 445.573 328.512 446.776 328.512 447.98 328.512 449.171 328.755 450.278 329.227 451.385 329.698 452.386 330.389 453.22 331.256 454.053 332.124 454.703 333.151 455.131 334.276 455.558 335.401 455.754 336.601 455.706 337.803V374.911C455.754 376.113 455.558 377.313 455.131 378.438 454.703 379.563 454.053 380.59 453.22 381.458 452.386 382.325 451.385 383.016 450.278 383.487 449.171 383.958 447.98 384.202 446.776 384.202 445.573 384.202 444.382 383.958 443.275 383.487 442.168 383.016 441.167 382.325 440.333 381.458 439.499 380.59 438.849 379.563 438.422 378.438 437.995 377.313 437.799 376.113 437.847 374.911V337.803zM410.363 324.261C409.936 325.386 409.74 326.586 409.788 327.788V364.896C409.74 366.099 409.936 367.298 410.363 368.423 410.79 369.548 411.44 370.575 412.274 371.443 413.108 372.31 414.109 373.001 415.216 373.472 416.323 373.944 417.514 374.187 418.717 374.187 419.921 374.187 421.112 373.944 422.219 373.472 423.326 373.001 424.327 372.31 425.161 371.443 425.995 370.575 426.645 369.548 427.072 368.423 427.499 367.298 427.695 366.099 427.647 364.896V327.788C427.695 326.586 427.499 325.386 427.072 324.261 426.645 323.136 425.995 322.109 425.161 321.242 424.327 320.374 423.326 319.684 422.219 319.212 421.112 318.741 419.921 318.498 418.717 318.498 417.514 318.498 416.323 318.741 415.216 319.212 414.109 319.684 413.108 320.374 412.274 321.242 411.44 322.109 410.79 323.136 410.363 324.261zM381.729 318.774C381.682 317.571 381.877 316.372 382.304 315.247 382.732 314.122 383.382 313.094 384.216 312.227 385.05 311.359 386.05 310.669 387.157 310.197 388.265 309.726 389.456 309.483 390.659 309.483 391.862 309.483 393.053 309.726 394.16 310.197 395.268 310.669 396.268 311.359 397.102 312.227 397.936 313.094 398.586 314.122 399.013 315.247 399.441 316.372 399.636 317.571 399.589 318.774V355.881C399.636 357.084 399.441 358.284 399.013 359.409 398.586 360.534 397.936 361.561 397.102 362.428 396.268 363.296 395.268 363.986 394.16 364.458 393.053 364.929 391.862 365.172 390.659 365.172 389.456 365.172 388.265 364.929 387.157 364.458 386.05 363.986 385.05 363.296 384.216 362.428 383.382 361.561 382.732 360.534 382.304 359.409 381.877 358.284 381.682 357.084 381.729 355.881V318.774zM354.246 308.038C353.818 309.163 353.623 310.362 353.67 311.565V348.673C353.623 349.875 353.818 351.075 354.246 352.2 354.673 353.325 355.323 354.352 356.157 355.219 356.991 356.087 357.991 356.777 359.099 357.249 360.206 357.72 361.397 357.963 362.6 357.963 363.803 357.963 364.994 357.72 366.102 357.249 367.209 356.777 368.209 356.087 369.043 355.219 369.877 354.352 370.527 353.325 370.954 352.2 371.382 351.075 371.577 349.875 371.53 348.673V311.565C371.577 310.362 371.382 309.163 370.954 308.038 370.527 306.913 369.877 305.886 369.043 305.018 368.209 304.15 367.209 303.46 366.102 302.989 364.994 302.517 363.803 302.274 362.6 302.274 361.397 302.274 360.206 302.517 359.099 302.989 357.991 303.46 356.991 304.15 356.157 305.018 355.323 305.886 354.673 306.913 354.246 308.038zM129.2 311.565C129.152 310.362 129.348 309.163 129.775 308.038 130.203 306.913 130.853 305.886 131.687 305.018 132.521 304.15 133.521 303.46 134.628 302.989 135.735 302.517 136.926 302.274 138.13 302.274 139.333 302.274 140.524 302.517 141.631 302.989 142.739 303.46 143.739 304.15 144.573 305.018 145.407 305.886 146.057 306.913 146.484 308.038 146.912 309.163 147.107 310.362 147.06 311.565V348.673C147.107 349.875 146.912 351.075 146.484 352.2 146.057 353.325 145.407 354.352 144.573 355.219 143.739 356.087 142.739 356.777 141.631 357.249 140.524 357.72 139.333 357.963 138.13 357.963 136.926 357.963 135.735 357.72 134.628 357.249 133.521 356.777 132.521 356.087 131.687 355.219 130.853 354.352 130.203 353.325 129.775 352.2 129.348 351.075 129.152 349.875 129.2 348.673V311.565zM101.717 315.247C101.289 316.372 101.094 317.571 101.141 318.774V355.881C101.094 357.084 101.289 358.284 101.717 359.409 102.144 360.534 102.794 361.561 103.628 362.428 104.462 363.296 105.462 363.986 106.569 364.458 107.677 364.929 108.868 365.172 110.071 365.172 111.274 365.172 112.465 364.929 113.573 364.458 114.68 363.986 115.68 363.296 116.514 362.428 117.348 361.561 117.998 360.534 118.425 359.409 118.853 358.284 119.048 357.084 119.001 355.881V318.774C119.048 317.571 118.853 316.372 118.425 315.247 117.998 314.122 117.348 313.094 116.514 312.227 115.68 311.359 114.68 310.669 113.573 310.197 112.465 309.726 111.274 309.483 110.071 309.483 108.868 309.483 107.677 309.726 106.569 310.197 105.462 310.669 104.462 311.359 103.628 312.227 102.794 313.094 102.144 314.122 101.717 315.247zM73.0827 326.788C73.035 325.586 73.2307 324.386 73.658 323.261 74.0853 322.136 74.7354 321.109 75.5693 320.242 76.4032 319.374 77.4037 318.684 78.5109 318.212 79.618 317.741 80.809 317.498 82.0124 317.498 83.2158 317.498 84.4068 317.741 85.514 318.212 86.6211 318.684 87.6217 319.374 88.4556 320.242 89.2895 321.109 89.9395 322.136 90.3668 323.261 90.7941 324.386 90.9898 325.586 90.9421 326.788V363.896C90.9898 365.099 90.7941 366.298 90.3668 367.423 89.9395 368.548 89.2895 369.575 88.4556 370.443 87.6217 371.31 86.6211 372.001 85.514 372.472 84.4068 372.944 83.2158 373.187 82.0124 373.187 80.809 373.187 79.618 372.944 78.5109 372.472 77.4037 372.001 76.4032 371.31 75.5693 370.443 74.7354 369.575 74.0853 368.548 73.658 367.423 73.2307 366.298 73.035 365.099 73.0827 363.896V326.788zM45.5992 334.276C45.1719 335.401 44.9762 336.601 45.0239 337.803V374.911C44.9762 376.113 45.1719 377.313 45.5992 378.438 46.0264 379.563 46.6765 380.59 47.5104 381.458 48.3443 382.325 49.3449 383.016 50.452 383.487 51.5592 383.958 52.7502 384.202 53.9536 384.202 55.157 384.202 56.3479 383.958 57.4551 383.487 58.5623 383.016 59.5629 382.325 60.3968 381.458 61.2307 380.59 61.8807 379.563 62.308 378.438 62.7353 377.313 62.931 376.113 62.8833 374.911V337.803C62.931 336.601 62.7353 335.401 62.308 334.276 61.8807 333.151 61.2307 332.124 60.3968 331.256 59.5629 330.389 58.5623 329.698 57.4551 329.227 56.3479 328.755 55.157 328.512 53.9536 328.512 52.7502 328.512 51.5592 328.755 50.452 329.227 49.3449 329.698 48.3443 330.389 47.5104 331.256 46.6765 332.124 46.0264 333.151 45.5992 334.276zM16.965 350.221C16.9174 349.018 17.113 347.819 17.5403 346.694 17.9676 345.569 18.6177 344.542 19.4516 343.674 20.2855 342.806 21.286 342.116 22.3932 341.645 23.5004 341.173 24.6914 340.93 25.8948 340.93 27.0981 340.93 28.2891 341.173 29.3963 341.645 30.5035 342.116 31.504 342.806 32.3379 343.674 33.1718 344.542 33.8219 345.569 34.2492 346.694 34.6764 347.819 34.8721 349.018 34.8244 350.221V387.328C34.8721 388.531 34.6764 389.731 34.2492 390.856 33.8219 391.981 33.1718 393.008 32.3379 393.875 31.504 394.743 30.5035 395.433 29.3963 395.905 28.2891 396.376 27.0981 396.619 25.8948 396.619 24.6914 396.619 23.5004 396.376 22.3932 395.905 21.286 395.433 20.2855 394.743 19.4516 393.875 18.6177 393.008 17.9676 391.981 17.5403 390.856 17.113 389.731 16.9174 388.531 16.965 387.328V350.221z"
        />
        <path
          fill="#828282"
          fillOpacity={0.7}
          fillRule="evenodd"
          d="M500 421.001C426.449 379.002 341.277 355 250.5 355C159.311 355 73.7785 379.22 0 421.574V500H10.1459C78.8321 453.901 161.516 427 250.5 427C339.484 427 422.168 453.901 490.854 500H500V421.001ZM233 381C233 376.03 237.029 372 242 372H259C263.971 372 268 376.03 268 381V398C268 402.971 263.971 407 259 407H242C237.029 407 233 402.971 233 398V381Z"
          clipRule="evenodd"
        />
        <path
          fill="#828282"
          fillOpacity={0.7}
          d="M237 204.802C237.001 205.385 237.233 205.944 237.645 206.356C238.058 206.769 238.618 207 239.201 207H260.803C261.386 207 261.945 206.769 262.357 206.357C262.769 205.945 263 205.386 263 204.804V183.197C263 182.614 262.769 182.055 262.357 181.643C261.945 181.232 261.386 181 260.803 181H239.201C238.618 181 238.058 181.232 237.645 181.644C237.233 182.056 237.001 182.615 237 183.198V204.802Z"
        />
        <path
          fill="#828282"
          fillOpacity={0.7}
          fillRule="evenodd"
          d="M250 84.0001C250.681 84.0001 251.35 83.9433 252 83.8342V159H273.633C276.647 159 279.539 160.198 281.671 162.33C283.802 164.461 285 167.353 285 170.368V217.633C285 220.648 283.802 223.539 281.671 225.671C279.539 227.803 276.647 229 273.633 229H252L252.118 259.174C251.542 259.059 250.955 259 250.365 259C249.605 259 248.85 259.097 248.118 259.287L248 229H226.377C223.362 229 220.469 227.803 218.336 225.671C216.202 223.54 215.003 220.649 215 217.633V170.368C215.001 168.843 215.308 167.351 215.887 165.972L169.832 123.093C170.847 122.218 171.714 121.176 172.39 120.009L218.102 162.569C218.179 162.488 218.257 162.408 218.336 162.329C220.469 160.198 223.362 159 226.377 159H248V83.8342C248.65 83.9433 249.319 84.0001 250 84.0001ZM234 204.804V183.197C234.001 181.818 234.55 180.496 235.525 179.522C236.5 178.547 237.822 178 239.201 178H260.803C262.182 178 263.503 178.548 264.478 179.522C265.453 180.497 266 181.818 266 183.197V204.804C266 206.182 265.453 207.504 264.478 208.478C263.503 209.453 262.182 210 260.803 210H239.201C237.822 210 236.5 209.453 235.525 208.478C234.55 207.504 234.001 206.182 234 204.804Z"
          clipRule="evenodd"
        />
        <path
          fill="#828282"
          fillOpacity={0.7}
          d="M241.435 284.586H231.236V288.586H241.435V284.586zM248.334 314.455L248.492 355 252.492 354.985 252.334 314.47C251.689 314.615 251.029 314.689 250.365 314.689 249.68 314.689 248.998 314.61 248.334 314.455zM259.295 288.586H269.494V284.586H259.295V288.586z"
        />
        <path
          fill="#828282"
          fillOpacity={0.7}
          fillRule="evenodd"
          d="M286.323 263.757C286.495 264.082 286.647 264.418 286.778 264.764C287.205 265.889 287.401 267.088 287.354 268.291V273.549L335.285 125.692C336.157 125.894 337.066 126 338 126C344.627 126 350 120.628 350 114C350 107.373 344.627 102 338 102C333.806 102 330.114 104.152 327.968 107.412L305.417 96.7063C304.998 97.9985 304.365 99.1946 303.561 100.253L326.359 111.076C326.124 112.012 326 112.992 326 114C326 116.19 326.586 118.242 327.611 120.01L281.901 162.567C282.845 163.567 283.592 164.722 284.115 165.97L330.169 123.093C330.613 123.476 331.085 123.827 331.582 124.142L286.323 263.757ZM346 114C346 118.419 342.418 122 338 122C333.582 122 330 118.419 330 114C330 109.582 333.582 106 338 106C342.418 106 346 109.582 346 114Z"
          clipRule="evenodd"
        />
        <path
          fill="#828282"
          fillOpacity={0.7}
          d="M213.377 276.853V268.291C213.335 267.228 213.483 266.167 213.813 265.158L168.399 124.154C167.276 124.863 166.027 125.391 164.694 125.697L213.377 276.853zM194.482 96.3782C194.864 97.6827 195.462 98.8952 196.234 99.9743L173.616 110.975C173.273 109.657 172.712 108.427 171.974 107.325L194.482 96.3782z"
        />
        <path
          fill="#828282"
          fillOpacity={0.7}
          fillRule="evenodd"
          d="M174 114C174 120.628 168.627 126 162 126C155.373 126 150 120.628 150 114C150 107.373 155.373 102 162 102C168.627 102 174 107.373 174 114ZM170 114C170 118.419 166.418 122 162 122C157.582 122 154 118.419 154 114C154 109.582 157.582 106 162 106C166.418 106 170 109.582 170 114Z"
          clipRule="evenodd"
        />
        <path d="M261.511 75.4021C261.829 74.3236 262 73.1817 262 72 262 65.3726 256.627 60 250 60 243.373 60 238 65.3726 238 72 238 73.1327 238.157 74.2287 238.45 75.2675L215.868 86.1698C213.701 83.0458 210.09 81 206 81 199.373 81 194 86.3726 194 93 194 99.6274 199.373 105 206 105 206.982 105 207.937 104.882 208.851 104.659L232.292 159H236.649L212.524 103.074C215.82 100.935 218 97.2219 218 93 218 91.8888 217.849 90.8128 217.566 89.7916L240.167 78.8804C242.337 81.9761 245.932 84 250 84 254.017 84 257.574 82.0258 259.752 78.9947L282.408 89.8869C282.142 90.8797 282 91.9233 282 93 282 97.2219 284.18 100.935 287.476 103.074L263.351 159H267.708L291.149 104.659C292.063 104.882 293.018 105 294 105 300.627 105 306 99.6274 306 93 306 86.3726 300.627 81 294 81 289.875 81 286.236 83.0812 284.076 86.2509L261.511 75.4021zM213.952 264.764C213.525 265.889 213.329 267.088 213.377 268.291V305.398C213.329 306.601 213.525 307.801 213.952 308.926 214.379 310.051 215.029 311.078 215.863 311.945 216.697 312.813 217.698 313.503 218.805 313.975 219.912 314.446 221.103 314.689 222.306 314.689 223.51 314.689 224.701 314.446 225.808 313.975 226.915 313.503 227.916 312.813 228.75 311.945 229.583 311.078 230.233 310.051 230.661 308.926 231.088 307.801 231.284 306.601 231.236 305.398V268.291C231.284 267.088 231.088 265.889 230.661 264.764 230.233 263.639 229.583 262.612 228.75 261.744 227.916 260.876 226.915 260.186 225.808 259.715 224.701 259.243 223.51 259 222.306 259 221.103 259 219.912 259.243 218.805 259.715 217.698 260.186 216.697 260.876 215.863 261.744 215.029 262.612 214.379 263.639 213.952 264.764zM241.435 268.291C241.388 267.088 241.583 265.889 242.011 264.764 242.438 263.639 243.088 262.612 243.922 261.744 244.756 260.876 245.756 260.186 246.863 259.715 247.971 259.243 249.162 259 250.365 259 251.568 259 252.759 259.243 253.866 259.715 254.974 260.186 255.974 260.876 256.808 261.744 257.642 262.612 258.292 263.639 258.719 264.764 259.147 265.889 259.342 267.088 259.295 268.291V305.398C259.342 306.601 259.147 307.801 258.719 308.926 258.292 310.051 257.642 311.078 256.808 311.945 255.974 312.813 254.974 313.503 253.866 313.975 252.759 314.446 251.568 314.689 250.365 314.689 249.162 314.689 247.971 314.446 246.863 313.975 245.756 313.503 244.756 312.813 243.922 311.945 243.088 311.078 242.438 310.051 242.011 308.926 241.583 307.801 241.388 306.601 241.435 305.398V268.291zM269.494 268.291C269.446 267.088 269.642 265.889 270.069 264.764 270.497 263.639 271.147 262.612 271.981 261.744 272.815 260.876 273.815 260.186 274.922 259.715 276.029 259.243 277.22 259 278.424 259 279.627 259 280.818 259.243 281.925 259.715 283.033 260.186 284.033 260.876 284.867 261.744 285.701 262.612 286.351 263.639 286.778 264.764 287.205 265.889 287.401 267.088 287.354 268.291V305.398C287.401 306.601 287.205 307.801 286.778 308.926 286.351 310.051 285.701 311.078 284.867 311.945 284.033 312.813 283.033 313.503 281.925 313.975 280.818 314.446 279.627 314.689 278.424 314.689 277.22 314.689 276.029 314.446 274.922 313.975 273.815 313.503 272.815 312.813 271.981 311.945 271.147 311.078 270.497 310.051 270.069 308.926 269.642 307.801 269.446 306.601 269.494 305.398V268.291z" />
      </g>
      <defs>
        <clipPath id="downgrading_svg__clip0_1083_14350">
          <rect width={500} height={500} fill="#fff" rx={2} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgDowngrading;

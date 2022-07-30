import style from './loader.module.css';

export default function PostLoader() {
  return (
    <div className={style.loaderWrapper}>
      <svg
        role="img"
        width="496"
        height="124"
        aria-labelledby="loading-aria"
        viewBox="0 0 496 124"
        preserveAspectRatio="none"
      >
        <title id="loading-aria">Loading...</title>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#clip-path)"
          style={{ fill: 'url("#fill")' }}
        />
        <defs>
          <clipPath id="clip-path">
            <rect x="56" y="12" rx="3" ry="3" width="97" height="17" />
            <rect x="2" y="67" rx="3" ry="3" width="410" height="8" />
            <rect x="3" y="89" rx="3" ry="3" width="178" height="8" />
            <circle cx="20" cy="20" r="20" />
          </clipPath>
          <linearGradient id="fill">
            <stop
              offset="0.599964"
              stopColor="#e6e4e4"
              stopOpacity="1"
            >
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop
              offset="1.59996"
              stopColor="#ecebeb"
              stopOpacity="1"
            >
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop
              offset="2.59996"
              stopColor="#f3f3f3"
              stopOpacity="1"
            >
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

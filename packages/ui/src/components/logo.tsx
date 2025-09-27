interface LogoProps {
  className?: string;
}

export default function Logo({ className = "#00093c" }: LogoProps) {
  return (
    <div className="size-full">
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 915.46 812.3"
      >
        <defs>
          <style>{`
      .cls-1 {
        fill: ${className};
        stroke: url(#Degradado_sin_nombre_3);
        stroke-miterlimit: 10;
      }
    `}</style>
          <linearGradient
            id="Degradado_sin_nombre_3"
            data-name="Degradado sin nombre 3"
            x1="0"
            y1="406.15"
            x2="915.46"
            y2="406.15"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#00a1f3" />
            <stop offset=".07" stop-color="#0f92f3" />
            <stop offset=".29" stop-color="#4165f3" />
            <stop offset=".51" stop-color="#6841f3" />
            <stop offset=".7" stop-color="#8428f3" />
            <stop offset=".87" stop-color="#9518f3" />
            <stop offset="1" stop-color="#9b13f3" />
          </linearGradient>
        </defs>
        <path
          className="cls-1"
          d="M457.73,811.8h384.18c56.15,0,91.24-60.78,63.17-109.41l-39.66-68.69H323.11c-33.07,0-59.88-26.81-59.88-59.88h0c0-33.07,26.81-59.88,59.88-59.88h473.17l-83.29-144.27-11.32-19.6h-291.46c-26.11,0-47.27-21.16-47.27-47.27h0c0-26.11,21.16-47.27,47.27-47.27h236.88l-126.19-218.57c-28.07-48.63-98.26-48.63-126.34,0l-192.09,332.71L10.38,702.39c-28.07,48.63,7.02,109.41,63.17,109.41h384.18Z"
        />
      </svg>
    </div>
  );
}

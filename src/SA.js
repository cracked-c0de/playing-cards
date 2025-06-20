import * as React from "react";
const SvgSA = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="S-A_svg__card"
    height={336}
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width={240}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <symbol
        id="S-A_svg__b"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
          stroke="#000"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
      <symbol
        id="S-A_svg__a"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path d="M0-500c100 250 355 400 355 685a150 150 0 0 1-300 0 10 10 0 0 0-20 0c0 200 50 215 95 315h-260c45-100 95-115 95-315a10 10 0 0 0-20 0 150 150 0 0 1-300 0c0-285 255-435 355-685Z" />
      </symbol>
    </defs>
    <rect
      width={239}
      height={335}
      x={-119.5}
      y={-167.5}
      rx={12}
      ry={12}
      fill="#fff"
      stroke="#000"
    />
    <use
      xlinkHref="#S-A_svg__a"
      height={164.8}
      width={164.8}
      x={-82.4}
      y={-82.4}
      stroke="#000"
      strokeWidth={100}
      strokeDasharray="100,100"
      strokeLinecap="round"
    />
    <use
      xlinkHref="#S-A_svg__a"
      height={164.8}
      width={164.8}
      x={-82.4}
      y={-82.4}
      stroke="#fff"
      strokeWidth={50}
    />
    <use
      xlinkHref="#S-A_svg__a"
      height={164.8}
      width={164.8}
      x={-82.4}
      y={-82.4}
    />
    <use xlinkHref="#S-A_svg__b" height={32} width={32} x={-114.4} y={-156} />
    <use
      xlinkHref="#S-A_svg__a"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <g transform="rotate(180)">
      <use xlinkHref="#S-A_svg__b" height={32} width={32} x={-114.4} y={-156} />
      <use
        xlinkHref="#S-A_svg__a"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
    </g>
  </svg>
);
export default SvgSA;

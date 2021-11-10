import React from "react";
import { foodPantry, mealProgram, closed } from "theme/colors";

/*
This is a temporary test file for Issue #923 testing. It should be
removed once we make a decision about the selected orgaiation map pin style,
and the contents of this file should replace mapMarker.js, if this is the
preferred style.

*/

const MapMarker = ({
  category,
  inactive,
  onClick,
  selected = false,
  scale = 1.0,
}) => {
  const width = (selected ? 51 : 30) * scale;
  const height = (selected ? 68 : 40) * scale;
  //const filter = selected ? "url(#f1)" : "";
  const filter = selected ? "" : "";
  let content;

  if (selected) {
    if (category === -1)
      // Selected Meal Program + Pantry
      content = (
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 1.3189655,30.687855 c 0,16.4192 31.0000005,52.6568 31.0000005,52.6568 0,0 31,-36.2376 31,-52.6568 0,-16.4398 -13.888,-29.74819983 -31,-29.74819983 -17.112,0 -31.0000005,13.30839983 -31.0000005,29.74819983 z"
            fill="#336699"
            id="path416"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 32.318966,0.93965517 V 83.344655 c 0,0 31,-36.2376 31,-52.6568 0,-16.4398 -13.888,-29.74819983 -31,-29.74819983 z"
            fill="#f27e30"
            id="path418"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 5.9114955,30.779255 c 0,13.9347 26.1375705,44.6884 26.1375705,44.6884 0,0 26.1376,-30.7537 26.1376,-44.6884 0,-13.9522 -11.7096,-25.2467999 -26.1376,-25.2467999 -14.4279,0 -26.1375705,11.2945999 -26.1375705,25.2467999 z"
            fill="#ffffff"
            id="path420"
          />
          <path
            d="m 46.098666,14.717455 c 0.959,0 1.1463,0.8812 1.1463,0.8812 0,1.9796 0,6.255 0,8.2589 0,2.5583 -3.4366,3.1527 -3.4366,3.1527 v 19.3559 c 0,0 -0.0294,1.6476 -2.3062,1.6476 -2.2768,0 1.0538,0 -1.1576,0 -2.2113,0 -2.2519,-1.6476 -2.2519,-1.6476 v -19.3559 c 0,0 -3.4773,-0.577 -3.4773,-3.144 v -8.3058 c 0,0 0.0271,-0.843 1.1463,-0.843 1.1192,0 1.1373,0.0296 1.1373,0.843 0,0.8133 0.0361,5.9578 0.0361,5.9578 0,0 0.0789,0.7855 0.6002,0.7855 0.5212,0 0.4806,-0.7855 0.4806,-0.7855 0,0 0,-5.1149 0,-5.9578 0,-0.843 0.0136,-0.843 1.1599,-0.843 1.1463,0 1.1982,0.0296 1.1982,0.843 0,0.8133 0,6.0447 0,6.0447 0,0 0.0406,0.756 0.5596,0.756 0.519,0 0.5709,-0.8134 0.5709,-0.8134 0,0 0,-5.1827 0,-6.0065 0,-0.8238 0.2008,-0.8238 1.2411,-0.8238 1.0402,0 1.1056,0.0487 1.1056,0.8047 0,0.756 0,5.9248 0,5.9248 0,0 -0.0406,0.9437 0.519,0.9437 0.58,0 0.6138,-0.8916 0.6138,-0.8916 0,0 0.009,-5.0575 0.009,-5.9195 0,-0.8621 0.1467,-0.8621 1.1057,-0.8621 z"
            fill="#f27e30"
            id="path422"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 21.678166,42.875155 c -0.5498,0.6057 -1.6204,0.9518 -2.5463,0.9518 -3.1539,0 -7.4796,-5.5812 -7.4796,-10.5566 0,-4.9755 2.0543,-8.5088 5.2082,-8.5088 1.7072,0 3.096,0.2019 3.8339,1.0816 l -0.0145,-0.0576 c 0,0 -0.5642,-2.4373 -1.5046,-2.942 0.5208,-0.2741 1.4757,-1.0528 1.4757,-1.0528 0,0 1.4756,1.9902 1.4756,3.9948 v 0.0576 c 1.0851,-0.9518 2.3872,-1.5431 4.3547,-1.5431 3.1539,0 5.2083,3.9948 5.2083,8.9703 0,4.9754 -4.4849,10.5566 -7.6388,10.5566 -0.9259,0 -1.8229,-0.3317 -2.3726,-0.9518 z"
            fill="#336699"
            id="path424"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 22.922466,24.328955 c 0,0 1.8518,-0.4182 2.6909,-1.8027 0.8391,-1.3845 0.3472,-3.216 0.3472,-3.216 0,0 -1.8518,0.4182 -2.6909,1.8027 -0.8391,1.3845 -0.3472,3.216 -0.3472,3.216 z"
            fill="#336699"
            id="path426"
          />
        </g>
      );
    else if (category === 0)
      // Selected Pantry
      content = (
        <g>
          <path
            d="m 32.172414,80.865103 c -0.0571,-0.068 -0.1161,-0.14 -0.177,-0.213 -0.8422,-1.016 -2.0467,-2.488 -3.4928,-4.306 -2.8934,-3.638 -6.7482,-8.6547 -10.5999,-14.1772 -3.8555,-5.528 -7.68763,-11.5339 -10.5499203,-17.1538 -2.89084,-5.676 -4.68038,-10.7479 -4.68038,-14.4738 0,-15.5531 13.1569003,-28.2481996 29.5000003,-28.2481996 16.3431,0 29.5,12.6950996 29.5,28.2481996 0,3.7259 -1.7895,8.7978 -4.6804,14.4738 -2.8623,5.6199 -6.6944,11.6258 -10.5499,17.1538 -3.8517,5.5225 -7.7065,10.5392 -10.5999,14.1772 -1.4461,1.818 -2.6506,3.29 -3.4928,4.306 -0.0609,0.073 -0.1199,0.145 -0.177,0.213 z"
            fill="#ffffff"
            stroke="#336699"
            strokeWidth="3"
            id="path57"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 32.027614,48.876503 c -0.7853,0.8653 -2.3147,1.3597 -3.6373,1.3597 -4.5054,0 -10.6847,-7.9727 -10.6847,-15.0801 0,-7.1075 2.9347,-12.1548 7.44,-12.1548 2.4387,0 4.4227,0.2884 5.4767,1.5451 l -0.0207,-0.0824 c 0,0 -0.806,-3.4816 -2.1493,-4.2027 0.744,-0.3914 2.108,-1.5038 2.108,-1.5038 0,0 2.108,2.8429 2.108,5.7065 v 0.0824 c 1.55,-1.3597 3.41,-2.2043 6.2206,-2.2043 4.5054,0 7.44,5.7065 7.44,12.814 0,7.1074 -6.4066,15.0801 -10.912,15.0801 -1.3226,0 -2.604,-0.4738 -3.3893,-1.3597 z"
            fill="#336699"
            id="path59"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 33.805014,22.383203 c 0,0 2.6454,-0.5974 3.844,-2.5751 1.1987,-1.9777 0.496,-4.5941 0.496,-4.5941 0,0 -2.6453,0.5974 -3.844,2.5752 -1.1986,1.9777 -0.496,4.594 -0.496,4.594 z"
            fill="#336699"
            id="path61"
          />
        </g>
      );
    else if (category === 1)
      // Selected Meal Program
      content = (
        <g>
          <path
            d="m 32.025862,81.011655 c -0.0571,-0.068 -0.1161,-0.14 -0.177,-0.213 -0.8422,-1.016 -2.0467,-2.488 -3.4928,-4.306 -2.8934,-3.638 -6.7482,-8.6547 -10.5999,-14.1772 -3.8555,-5.528 -7.68763,-11.5339 -10.5499199,-17.1538 -2.89084,-5.676 -4.68038,-10.7479 -4.68038,-14.4738 0,-15.5531 13.1568999,-28.2481999 29.4999999,-28.2481999 16.3431,0 29.5,12.6950999 29.5,28.2481999 0,3.7259 -1.7895,8.7978 -4.6804,14.4738 -2.8623,5.6199 -6.6944,11.6258 -10.5499,17.1538 -3.8517,5.5225 -7.7065,10.5392 -10.5999,14.1772 -1.4461,1.818 -2.6506,3.29 -3.4928,4.306 -0.0609,0.073 -0.1199,0.145 -0.177,0.213 z"
            fill="#ffffff"
            stroke="#f27e30"
            strokeWidth="3"
            id="path234"
          />
          <path
            d="m 36.802362,15.865455 c 0.8784,0 1.0499,1.0478 1.0499,1.0478 0,2.3539 0,7.4379 0,9.8208 0,3.0421 -3.1475,3.7489 -3.1475,3.7489 v 23.0165 c 0,0 -0.0269,1.9592 -2.1122,1.9592 -2.0852,0 0.9652,0 -1.0602,0 -2.0253,0 -2.0625,-1.9592 -2.0625,-1.9592 v -23.0165 c 0,0 -3.1847,-0.6861 -3.1847,-3.7386 v -9.8766 c 0,0 0.0248,-1.0023 1.0498,-1.0023 1.0251,0 1.0416,0.0351 1.0416,1.0023 0,0.9672 0.0331,7.0845 0.0331,7.0845 0,0 0.0723,0.9342 0.5497,0.9342 0.4774,0 0.4402,-0.9342 0.4402,-0.9342 0,0 0,-6.0822 0,-7.0845 0,-1.0023 0.0124,-1.0023 1.0623,-1.0023 1.0499,0 1.0974,0.0351 1.0974,1.0023 0,0.9672 0,7.1879 0,7.1879 0,0 0.0372,0.899 0.5125,0.899 0.4754,0 0.5229,-0.9672 0.5229,-0.9672 0,0 0,-6.1628 0,-7.1424 0,-0.9796 0.1839,-0.9796 1.1367,-0.9796 0.9527,0 1.0126,0.0578 1.0126,0.9568 0,0.899 0,7.0453 0,7.0453 0,0 -0.0372,1.1222 0.4754,1.1222 0.5311,0 0.5621,-1.0602 0.5621,-1.0602 0,0 0.0083,-6.014 0.0083,-7.0391 0,-1.025 0.1343,-1.025 1.0126,-1.025 z"
            fill="#f27e30"
            id="path236"
          />
        </g>
      );
  } else {
    if (category === -1)
      content = (
        <g>
          <path
            d="M15 39.863 C10.201 34.568 1.439 22.592 0.075 15.856 -0.134 13.853 0.095 11.83 0.749 9.917 1.404 8.005 2.468 6.245 3.874 4.751 5.28 3.258 6.996 2.063 8.913 1.245 10.829 0.426 12.903 0.003 15 0 L15 6.364 15 20.698 Z"
            fill={inactive ? closed : foodPantry}
            filter={filter}
          />
          <path
            d="M15 39.863 C19.8 34.568 28.561 22.592 29.925 15.856 30.135 13.853 29.905 11.83 29.251 9.917 28.597 8.005 27.532 6.245 26.126 4.751 24.72 3.258 23.004 2.063 21.088 1.245 19.171 0.426 17.098 0.003 15 0 L15 6.364 15 20.698 Z"
            fill={inactive ? closed : mealProgram}
          />
          <path
            d="M8.481 18.575 C8.236 18.847 7.758 19 7.347 19 5.935 19 4 16.493 4 14.261 4 12.028 4.919 10.444 6.332 10.444 7.098 10.444 7.716 10.537 8.046 10.929 L8.04 10.904 C8.04 10.904 7.785 9.813 7.368 9.584 7.598 9.461 8.025 9.115 8.025 9.115 8.025 9.115 8.682 10.009 8.682 10.906 L8.682 10.929 C9.167 10.501 9.747 10.237 10.63 10.237 12.042 10.237 12.962 12.028 12.962 14.261 12.962 16.493 10.958 19 9.546 19 9.132 19 8.727 18.852 8.481 18.575 Z"
            fill="white"
          />
          <path
            d="M10.243 9.442 C9.867 10.064 9.039 10.25 9.039 10.25 9.039 10.25 8.822 9.43 9.198 8.809 9.575 8.188 10.402 8 10.402 8 10.402 8 10.62 8.821 10.243 9.442 Z"
            fill="white"
          />
          <path
            d="M23.455 7 C23.911 7 24 7.556 24 7.556 L24 11.825 C24 13.439 22.367 14.759 22.367 14.759 L22.367 19.96 C22.367 19.96 22.353 21 21.272 21 20.19 21 21.772 21 20.722 21 19.671 21 19.652 19.96 19.652 19.96 L19.652 14.759 C19.652 14.759 18 13.45 18 11.83 L18 7.532 C18 7.532 18.013 7 18.545 7 19.076 7 19.085 7.019 19.085 7.532 19.085 8.045 19.102 11.293 19.102 11.293 19.102 11.293 19.14 11.788 19.387 11.788 19.635 11.788 19.616 11.293 19.616 11.293 19.616 11.293 19.616 8.064 19.616 7.532 19.616 7 19.622 7 20.167 7 20.711 7 20.736 7.019 20.736 7.532 L20.736 11.347 C20.736 11.347 20.755 11.825 21.002 11.825 21.248 11.825 21.273 11.311 21.273 11.311 21.273 11.311 21.273 8.04 21.273 7.52 21.273 7 21.368 7 21.862 7 22.357 7 22.388 7.031 22.388 7.508 L22.388 11.248 C22.388 11.248 22.368 11.843 22.634 11.843 22.91 11.843 22.926 11.281 22.926 11.281 22.926 11.281 22.93 8.088 22.93 7.544 22.93 7 23 7 23.455 7 Z"
            fill="white"
          />
        </g>
      );
    else if (category === 0)
      content = (
        <g>
          <path
            d="M0,14.44C0,22.41,15,40,15,40s15-17.59,15-25.56C30,6.46,23.28,0,15,0C6.72,0,0,6.46,0,14.44z"
            fill={inactive ? closed : foodPantry}
            filter={filter}
          />
          <path
            d="M14.93,23.34C14.55,23.76,13.81,24,13.17,24C10.99,24,8,20.13,8,16.68c0-3.45,1.42-5.9,3.6-5.9
  c1.18,0,2.14,0.14,2.65,0.75l-0.01-0.04c0,0-0.39-1.69-1.04-2.04c0.36-0.19,1.02-0.73,1.02-0.73s1.02,1.38,1.02,2.77v0.04
  c0.75-0.66,1.65-1.07,3.01-1.07c2.18,0,3.6,2.77,3.6,6.22c0,3.45-3.1,7.32-5.28,7.32C15.93,24,15.31,23.77,14.93,23.34z"
            fill="white"
          />
          <path
            d="M15.79,10.48c0,0,1.28-0.29,1.86-1.25C18.23,8.27,17.89,7,17.89,7s-1.28,0.29-1.86,1.25
  C15.45,9.21,15.79,10.48,15.79,10.48z"
            fill="white"
          />
        </g>
      );
    else if (category === 1)
      content = (
        <g>
          <path
            d="M15,40c0,0-15-17.59-15-25.56C0,6.46,6.72,0,15,0c8.28,0,15,6.46,15,14.44C30,22.41,15,40,15,40z"
            fill={inactive ? closed : mealProgram}
            filter={filter}
          />
          <path
            d="M19,6.79c0,0-0.12-0.79-0.73-0.79c-0.61,0-0.7,0-0.7,0.78s-0.01,5.33-0.01,5.33s-0.02,0.8-0.39,0.8
  c-0.35,0-0.33-0.85-0.33-0.85V6.73c0-0.68-0.04-0.73-0.7-0.73c-0.66,0-0.79,0-0.79,0.74v5.41c0,0-0.03,0.73-0.36,0.73
  c-0.33,0-0.35-0.68-0.35-0.68V6.76c0-0.73-0.03-0.76-0.76-0.76c-0.73,0-0.73,0-0.73,0.76v5.37c0,0,0.03,0.71-0.3,0.71
  c-0.33,0-0.38-0.71-0.38-0.71s-0.02-4.64-0.02-5.37c0-0.73-0.01-0.76-0.72-0.76C11.02,6,11,6.76,11,6.76v6.74
  c0,2.31,2.2,3.58,2.2,3.58v7.42c0,0,0.03,1.48,1.43,1.48h0.73c1.44,0,1.46-1.48,1.46-1.48v-7.42c0,0,2.18-1.28,2.18-3.58V6.79z"
            fill="white"
          />
        </g>
      );
  }

  return (
    <>
      {selected ? (
        <svg
          width={width}
          height={height}
          viewBox="0 0 64 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          {content}
        </svg>
      ) : (
        <svg
          width={width}
          height={height}
          viewBox="0 0 30 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          {content}
        </svg>
      )}
    </>
  );
};

export default MapMarker;

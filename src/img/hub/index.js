import React from 'react';

import back from './back.svg';
import doors_back_front from './doors_back_front.svg';
import jar from './jar.svg';
import doors_front_back from './doors_front_back.svg';
import doors_front_front from './doors_front_front.svg';

export default {
  back,
  doors_back_front,
  jar,
  doors_front_back,
  doors_front_front,
  paths(){
    return {
      back_left: [],
      back_right: [],
      front_left: [],
      front_right: [],
    }
  }
    // <svg viewBox="0 0 3840 3261" width="100vw">
    //   <g fill="none" >
    //     <path id="back_left" d="M1909.466 1655.314c-200.277-8.093-382.83-111.895-382.83-111.895l-22.66-12.7-5.67-3.18c-1.88-1.07-3.78-2.12-5.7-3.11l-11.5-6-11.5-6c-3.85-2-7.64-4.09-11.54-6l-23.28-11.55c-3.89-1.91-7.74-3.89-11.66-5.73l-11.76-5.53-23.53-11.06-23.73-10.62-11.87-5.3-5.94-2.64-6-2.55c-63.65-27.49-128.31-52.62-193.56-76.08s-131.13-45.18-197.43-65.5c-66.3-20.32-133.06-39.18-200.17-56.68-67.11-17.5-134.62-33.44-202.44-48-67.82-14.56-135.95-27.58-204.38-38.87s-137.16-20.81-206.15-28c-67.364-7.02-134.976-11.774-202.69-13.316-1.63-.037-5.842.146-7.476.113" />
    //     <path id="back_right" d="M3945.15 1125c-69.35 1.46-138.6 6.3-207.59 13.42-68.99 7.12-137.72 16.71-206.15 28s-136.57 24.33-204.38 38.87-135.31 30.56-202.44 48-133.86 36.37-200.17 56.68c-66.31 20.31-132.17 42.06-197.43 65.5-65.26 23.44-129.91 48.59-193.56 76.08l-6 2.55-5.94 2.64-11.87 5.3-23.73 10.62-23.53 11.06-11.76 5.53c-3.92 1.84-7.77 3.83-11.66 5.73l-23.28 11.55c-3.9 1.88-7.69 4-11.54 6l-11.5 6-11.5 6c-1.93 1-3.82 2-5.7 3.11l-5.67 3.18-22.66 12.7s-218.445 109.956-428.09 109.956" />
    //     <path id="front_left" d="M-252 3365.608l60.64-134.9c16.54-45.325 36.587-90.45 59.61-134.07 11.44-21.79 23.63-43.15 36.29-64.21 12.66-21.06 25.87-41.77 39.63-62.1 55-81.33 117.66-157.06 184.68-228.3 16.787-17.787 33.83-35.32 51.13-52.6 17.3-17.28 34.853-34.28 52.66-51 35.587-33.487 71.997-66.047 109.23-97.68 74.42-63.25 151.64-123.06 230.76-180.11 79.12-57.05 160.12-111.49 242.63-163.39 82.51-51.9 166.39-101.61 251.4-149.24 85.01-47.63 171.19-93.12 258.33-136.67 43.567-21.773 87.407-42.99 131.52-63.65 22.053-10.333 44.177-20.507 66.37-30.52 22.21-10 44.46-19.86 66.91-29.35 0 0 217.34-127.818 323.24-127.818" />
    //     <path id="front_right" d="M1919 1664c100.388 0 364.205 126.174 364.205 126.174 23.63 6.87 45.88 16.74 68.09 26.74s44.32 20.19 66.37 30.52c44.1 20.667 87.94 41.883 131.52 63.65 87.133 43.553 173.243 89.11 258.33 136.67 85.087 47.56 168.877 97.317 251.37 149.27 82.507 51.92 163.4 106.353 242.68 163.3 79.12 57.06 156.34 116.86 230.76 180.11 37.22 31.607 73.63 64.167 109.23 97.68 17.767 16.773 35.32 33.773 52.66 51 17.34 17.227 34.383 34.76 51.13 52.6 67 71.24 129.66 147 184.68 228.3 13.76 20.32 26.97 41.02 39.63 62.1 12.65 21.06 24.85 42.43 36.29 64.21 23.023 43.62 43.07 88.745 60 135.07l60.25 133.9" />
    //   </g>
    // </svg>
}

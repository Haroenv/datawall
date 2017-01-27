/**
 * Global things that never change, colors and keyframes
 */

// import { keyframes } from 'styled-components';

export const colors = {
  darkGrey: '#232323',
  lightGrey: '#353535',
  white: '#ffffff',
  black: '#191919',
  red: '#c91f1b'
};

export const times = {
  podAnimation: 3000
};

export const STATION = {
  URI: 'http://irail.be/stations/NMBS/008892007',
  name: 'Gent Sint-Pieters',
  longitude: 3.710675,
  latitude: 51.035896
};

export const API_BASE_URI = process.env.NODE_ENV === 'development' ? 'localhost:3001' : '/';

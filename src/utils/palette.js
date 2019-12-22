import React, { useState } from 'react';

const colorPalettes = [
  ['#fa4142', '#d41516', '#308403', '#0b5e15'],
];

const getRandomPalette = () => {
  return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
};

export const usePalette = () => {
  const [palette, setPalette] = useState(getRandomPalette());
  const setRandomPalette = () => setPalette(getRandomPalette());

  return [palette, setRandomPalette];
};

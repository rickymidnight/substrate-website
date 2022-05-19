import { ThemeContext } from 'gatsby-plugin-substrate/src/contexts/ThemeContext';
import React, { useContext } from 'react';

import Icon from '../default/Icon';

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  function toggleTheme() {
    if (colorMode === 'dark') setColorMode('light');
    if (colorMode === 'light') setColorMode('dark');
  }

  if (!colorMode) {
    return null;
  }

  return (
    <div className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={toggleTheme}>
      {colorMode === 'light' && <Icon name="sun" className="opacity-80 fill-current text-black" />}
      {colorMode === 'dark' && <Icon name="moon" className="transform -rotate-12 fill-current text-white" />}
    </div>
  );
}

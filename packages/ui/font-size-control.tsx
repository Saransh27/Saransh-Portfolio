'use client';

import * as React from 'react';
import { Button } from './button';

const FONT_SIZES = ['14px', '16px', '18px', '20px', '22px'];

export function FontSizeControl() {
  const [fontSizeIndex, setFontSizeIndex] = React.useState<number>(1);

  React.useEffect(() => {
    const saved = localStorage.getItem('fontSizeIndex');
    if (saved) {
      const index = parseInt(saved, 10);
      if (index >= 0 && index < FONT_SIZES.length) {
        setFontSizeIndex(index);
      }
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--font-base',
      FONT_SIZES[fontSizeIndex]
    );
    localStorage.setItem('fontSizeIndex', fontSizeIndex.toString());
  }, [fontSizeIndex]);

  const decreaseSize = () => {
    setFontSizeIndex((prev) => Math.max(0, prev - 1));
  };

  const increaseSize = () => {
    setFontSizeIndex((prev) => Math.min(FONT_SIZES.length - 1, prev + 1));
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        size="sm"
        onClick={decreaseSize}
        disabled={fontSizeIndex === 0}
        aria-label="Decrease font size"
      >
        A-
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={increaseSize}
        disabled={fontSizeIndex === FONT_SIZES.length - 1}
        aria-label="Increase font size"
      >
        A+
      </Button>
    </div>
  );
}

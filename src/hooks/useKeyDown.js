import { useEffect } from 'react';

export const useKeyPress = (callback, keys) => {
  const onKeyDown = (event) => {
    const wasAnyKeyPressed = keys.some((key) => event.key === key);

    if (wasAnyKeyPressed) {
      event.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};

// enums/KeyboardKey.ts
export const KeyboardKey = {
  dot: '.',
};

// Example usage:
// useKeyPress(() => {
//   someCallback();
// }, [KeyboardKey.escape]);

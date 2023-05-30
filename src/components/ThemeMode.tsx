import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <div>
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black rounded-md border-blue border-2 p-4"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height={20} width={20} />
            </button>
          ) : (
            <button
              className="bg-gray-100 rounded-md border-blue border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height={20} width={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

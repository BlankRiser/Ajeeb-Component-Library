import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // showing only when client is done rendering
  useEffect(() => setMounted(true), []);
  return (
    <button
      aria-label='Toggle Theme'
      type='button'
      onClick={() => {
        setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
      className='text-gray-10 hover:bg-gray-01 focus-visible:ring-blue-06 dark:hover:bg-gray-08 rounded-[2px] hover:rounded-[.2rem] focus:outline-none focus-visible:ring-[2px] dark:text-white'
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <MoonIcon width={16} height={16} />
      ) : (
        <SunIcon width={16} height={16} />
      )}
    </button>
  );
}

import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        ring: 'hsl(var(--ring))',
        input: 'hsl(var(--input))',
        white: 'hsl(var(--white))',
        grey: 'hsl(var(--grey))',
        background: 'hsl(var(--background))',
        muted: {
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      borderRadius: {
        md: `calc(var(--radius) - 2px)`,
      },
      width: {
        'toast-dektop': 'var(--toast-desktop-width)',
        'toast-mobile': 'var(--toast-mobile-width)',
      },
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
    },
  },
  plugins: [],
};

export default config;

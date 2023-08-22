import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        ring: 'hsl(var(--ring))',
        input: 'hsl(var(--input))',
        white: 'hsl(var(--white))',
        background: 'hsl(var(--background))',
        'faded-black': 'hsl(var(--faded-black))',
        grey: {
          DEFAULT: 'hsl(var(--grey))',
          foreground: 'hsl(var(--grey-foreground))',
        },
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
        blue: {
          DEFAULT: 'hsl(var(--blue))',
          foreground: 'hsl(var(--blue-foreground))',
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
  plugins: [require('tailwindcss-animate')],
};

export default config;

import type {ReactNode} from 'react';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}

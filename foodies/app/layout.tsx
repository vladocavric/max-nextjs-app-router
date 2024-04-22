import React, { ReactNode } from 'react';
import './globals.scss'

type RootLayoutProps = {
  children: ReactNode;
}

export const metadata = {
  title: 'Foodies App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

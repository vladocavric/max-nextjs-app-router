import React, { ReactNode } from 'react';
import './globals.scss';
import MainHeader from '@/components/main-header';

type RootLayoutProps = {
    children: ReactNode;
};

export const metadata = {
    title: 'Foodies App',
    description: 'Your first NextJS app!',
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}

import '../globals.scss';

export const metadata = {
    title: 'home - Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;

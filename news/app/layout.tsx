import MainHeader from '@/components/header/main-header';
import './globals.scss';

export const metadata = {
    title: 'Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang='en'>
            <body>
                <div id='page'>
                    <MainHeader />
                    {children}
                </div>
            </body>
        </html>
    );
};

export default RootLayout;

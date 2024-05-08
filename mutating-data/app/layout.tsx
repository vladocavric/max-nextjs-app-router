import Header from '@/components/header';
import './globals.scss';

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
    </body>
  </html>
  );
}

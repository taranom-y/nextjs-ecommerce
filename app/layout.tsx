import Header from '@/components/layout/Header';
import QueryProvider from '@/providers/QueryProvider';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'VELORA',
  description: 'clothes and brands shop websit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${openSans.className}  `}>
      <body className='min-h-full flex flex-col'>
        <Header />
        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}

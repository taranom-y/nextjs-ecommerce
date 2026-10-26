import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/layout/Header';
import QueryProvider from '@/providers/QueryProvider';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/layout/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VELORA',
  description: 'Discover clothing, shoes, and popular brands at VELORA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={openSans.className}>
      <body className=' flex flex-col min-h-screen'>
        <QueryProvider>
          <Header />
          <main className='mt-24'>{children}</main>
        </QueryProvider>
        <Footer />
      </body>
    </html>
  );
}

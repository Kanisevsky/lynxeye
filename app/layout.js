import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata = {
  title: 'Lynxeye - A trusted guide for your next step',
  description:
    'Our Clients turn to us with their biggest strategic challenges. We help top level management navigate changing business conditions ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

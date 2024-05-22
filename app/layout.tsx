import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { PropsWithChildren, ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'Generated by create next app',
  creator: 'Emrah Atalay',
};

interface Props
  extends PropsWithChildren<{
    modal?: ReactNode;
  }> {}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}

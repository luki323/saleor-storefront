import type {ReactNode} from 'react';

import {Footer} from './_components/Footer';
import {Header} from './_components/Header';

interface Props {
  readonly children: ReactNode;
}

export default async function ShopLayout({children}: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

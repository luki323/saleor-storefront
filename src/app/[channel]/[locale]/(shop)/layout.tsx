import type {PropsWithChildren} from '@/lib/types/react';

import {Footer} from './_components/Footer';
import {Header} from './_components/Header';

export default async function ShopLayout({children}: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

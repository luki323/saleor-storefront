import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {ROUTE} from '@/lib/consts';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';

import {createConfirmAccountRequest} from './_tools/create-confirm-account-request';

export async function GET({nextUrl: {origin, searchParams}}: NextRequest) {
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (isDefined(email) && isDefined(token)) {
    const {confirmAccount} = await fetchQueryData(
      createConfirmAccountRequest({email, token}),
    );
    const {user} = confirmAccount ?? {};

    if (user?.isActive) {
      return NextResponse.redirect(new URL(ROUTE.LOGIN, origin));
    }
  }
  return NextResponse.next();
}

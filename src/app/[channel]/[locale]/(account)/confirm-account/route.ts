import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {ConfirmAccountDocument} from '@/graphql/generated/documents';
import {ROUTE} from '@/lib/consts/consts';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';

export async function GET({nextUrl: {origin, searchParams}}: NextRequest) {
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (email && token) {
    const {user} =
      (
        await fetchGraphQL(
          ConfirmAccountDocument,
          {
            variables: {
              email,
              token,
            },
          },
          {cache: 'no-cache'},
        )
      ).confirmAccount ?? {};

    if (user?.isActive) {
      return NextResponse.redirect(new URL(ROUTE.LOGIN, origin));
    }
  }

  return NextResponse.next();
}

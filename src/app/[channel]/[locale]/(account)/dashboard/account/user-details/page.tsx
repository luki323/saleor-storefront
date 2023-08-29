import {Suspense} from 'react';

import {Separator} from '@/lib/components/ui/Separator';
import {cn} from '@/lib/tools/cn';
import {RefreshAccessToken} from '@/modules/account/components/RefreshAccessToken';
import {hasAccessToken} from '@/modules/account/tools/cookies';

import {AccountDeletionSection} from './_components/account-deletion-section';
import {Hero} from './_components/Hero';
import {UserNameSection} from './_components/user-name-section';

export default function UserDetails() {
  if (hasAccessToken()) {
    return (
      <div className={cn('space-y-6')}>
        <Hero />
        <Separator />
        <UserNameSection />
        <AccountDeletionSection />
      </div>
    );
  }

  const fallback = <p>loading...</p>;

  return (
    <Suspense fallback={fallback}>
      <RefreshAccessToken />
      {fallback}
    </Suspense>
  );
}

import {Suspense} from 'react';

import {Separator} from '@/lib/components/ui/Separator';
import {cn} from '@/lib/tools/cn';
import {RefreshAccessToken} from '@/modules/account/components/RefreshAccessToken';
import {hasAccessToken} from '@/modules/account/tools/cookies';

import {ChangePasswordSection} from './_components/change-password-section/ChangePasswordSection';
import {Description} from './_components/Description';
import {RequestEmailChangeSection} from './_components/request-email-change-section';

export default function UserDetails() {
  if (hasAccessToken()) {
    return (
      <div className={cn('space-y-6')}>
        <Description />
        <Separator />
        <RequestEmailChangeSection />
        <ChangePasswordSection />
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

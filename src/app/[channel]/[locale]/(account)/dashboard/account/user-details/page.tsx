import {Separator} from '@/lib/components/ui/Separator';
import {cn} from '@/lib/tools/cn';

import {Hero} from './_components/Hero';
import {UserNameSection} from './_components/user-name-section';

export default function UserDetails() {
  return (
    <div className={cn('space-y-6')}>
      <Hero />
      <Separator />
      <UserNameSection />
    </div>
  );
}

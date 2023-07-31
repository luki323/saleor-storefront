import Link from 'next/link';

import {buttonStyles} from '@/components/Button';
import {Divider} from '@/components/Divider';
import {Text} from '@/components/Text';
import {ROUTE} from '@/consts';
import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {cn} from '@/tools/cn';

import {GoogleButton} from './_components/GoogleButton';
import {SignupForm} from './_components/SignupForm';

function SignupPage() {
  return (
    <div className="absolute inset-0 bg-zinc-900">
      <Link
        href={ROUTE.LOGIN}
        className={cn(
          buttonStyles({variant: 'ghost'}),
          'absolute right-4 top-4 md:right-8 md:top-8',
        )}>
        <FormattedMessage defaultMessage="Login" id="AyGauy" />
      </Link>
      <div className="ml-auto flex h-full flex-col items-center justify-center gap-4 bg-white lg:w-1/2">
        <div className="flex flex-col gap-4 px-2 lg:w-[350px]">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">
              <FormattedMessage
                defaultMessage="Create an account"
                id="0vL5u1"
              />
            </h1>
            <Text size="small" color="muted-foreground">
              <FormattedMessage
                defaultMessage="Enter your email below to create your account"
                id="Kx1LZl"
              />
            </Text>
          </div>
          <SignupForm />
          <Divider>
            <FormattedMessage defaultMessage="Or continue with" id="4cSA+G" />
          </Divider>
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

import {assertUnreachable} from '@/lib/tools/assert-unreachable';

import type {logInAction} from './log-in-action';

type LoginResult = Awaited<ReturnType<typeof logInAction>>;

export function handleLoginResult(loginResult: LoginResult) {
  switch (loginResult.type) {
    case 'csrfToken': {
      const csrfToken = loginResult.value;

      localStorage.setItem(csrfToken.name, csrfToken.value);

      break;
    }
    case 'error': {
      // TODO: Handle error case

      break;
    }
    default: {
      assertUnreachable(loginResult);
    }
  }
}

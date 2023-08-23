import {isDefined} from '@/lib/tools/type-guards/is-defined';

export function withTranslation<
  Obj extends {
    readonly translation?: Record<string, string | null> | null;
  },
>({translation, ...restProps}: Obj) {
  if (!translation) {
    return restProps;
  }
  return {
    ...restProps,
    ...Object.fromEntries(
      Object.entries(translation).filter(([, value]) => isDefined(value)),
    ),
  };
}

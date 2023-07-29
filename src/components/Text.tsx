import {cn} from '@/tools/cn';

type As = keyof Pick<JSX.IntrinsicElements, 'p' | 'span'>;

type Props = {
  readonly as?: As;
  readonly size?: 'small' | 'base' | 'large';
  readonly role?: Extract<JSX.IntrinsicElements[As]['role'], 'alert'>;
  readonly children: string;
};

export function Text({as: As = 'p', size = 'base', role, children}: Props) {
  return (
    <As
      role={role}
      className={cn(
        size === 'small' && 'text-sm',
        size === 'base' && 'text-base',
        size === 'large' && 'text-lg',
        role === 'alert' && 'text-red-600',
      )}>
      {children}
    </As>
  );
}

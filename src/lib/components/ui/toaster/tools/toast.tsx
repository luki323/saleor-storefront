import {toast as toastImpl} from 'sonner';

import type {ToasterProps} from '../Toaster';
import {Toaster} from '../Toaster';

type Props = Omit<ToasterProps, 'variant' | 'onClose'>;

export const toast = {
  default: (props) => {
    toastImpl.custom((id) => (
      <Toaster
        variant="default"
        onClose={() => {
          toastImpl.dismiss(id);
        }}
        {...props}
      />
    ));
  },
  destructive: (props) => {
    toastImpl.custom((id) => (
      <Toaster
        variant="destructive"
        onClose={() => {
          toastImpl.dismiss(id);
        }}
        {...props}
      />
    ));
  },
} satisfies Record<ToasterProps['variant'], (props: Props) => void>;

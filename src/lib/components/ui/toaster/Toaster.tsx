import {Toast} from './Toast';
import {ToastClose} from './ToastClose';
import {ToastDescription} from './ToastDescription';
import {ToastTitle} from './ToastTitle';

export interface ToasterProps {
  readonly title: string;
  readonly description: string;
  readonly variant: 'default' | 'destructive';
  readonly onClose: () => void;
}

export function Toaster({title, description, variant, onClose}: ToasterProps) {
  return (
    <Toast variant={variant}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      <ToastClose onClick={onClose} />
    </Toast>
  );
}

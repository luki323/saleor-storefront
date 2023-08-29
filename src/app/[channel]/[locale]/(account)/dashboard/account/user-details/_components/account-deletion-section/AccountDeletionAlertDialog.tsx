import {FormattedMessage} from '@/i18n/react-intl';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/lib/components/ui/AlertDialog';
import {Button} from '@/lib/components/ui/Button';

export function AccountDeletionAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <FormattedMessage defaultMessage="Delete your account" id="bhN9Hq" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <FormattedMessage
              defaultMessage="Are you absolutely sure?"
              id="v5ykbS"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            <FormattedMessage
              defaultMessage="This action cannot be undone. This will permanently delete your
            account and remove your data from our servers."
              id="sGf1iY"
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <FormattedMessage defaultMessage="Cancel" id="47FYwb" />
          </AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            <FormattedMessage defaultMessage="Delete account" id="wyxJrL" />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldDescription} from '@/lib/components/form/FormFieldDescription';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {FormFieldLabel} from '@/lib/components/form/FormFieldLabel';
import {Button} from '@/lib/components/ui/Button';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {Label} from '@/lib/components/ui/Label';
import {TextField} from '@/lib/components/ui/TextField';

import {Form} from '../Form';
import {FormFieldDescriptionText, FormItem} from '../Form';
import {FIELDS} from './fields';
import {useUserNameSchema} from './hooks/use-user-name-schema';
import {useUserNameSubmit} from './hooks/use-user-name-submit';

export function UserNameForm() {
  const userNameSchema = useUserNameSchema();

  const form = useForm<Zod.infer<typeof userNameSchema>>({
    resolver: zodResolver(userNameSchema),
  });

  const userNameSubmit = useUserNameSubmit();

  return (
    <Form form={form} onSubmit={form.handleSubmit(userNameSubmit)}>
      <FormField
        name={FIELDS.FIRST_NAME}
        control={form.control}
        render={({field: {value = '', ...restField}}) => (
          <FormItem>
            <FormFieldLabel>
              <Label>
                <FormattedMessage defaultMessage="First name" id="pONqz8" />
              </Label>
            </FormFieldLabel>
            <FormFieldControl>
              <TextField value={value} required {...restField} />
            </FormFieldControl>
            <div>
              <FormFieldDescription>
                <FormFieldDescriptionText>
                  <FormattedMessage
                    defaultMessage="First name description"
                    id="p1iOq7"
                  />
                </FormFieldDescriptionText>
              </FormFieldDescription>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </div>
          </FormItem>
        )}
      />
      <FormField
        name={FIELDS.LAST_NAME}
        control={form.control}
        render={({field: {value = '', ...restField}}) => (
          <FormItem>
            <FormFieldLabel>
              <Label>
                <FormattedMessage defaultMessage="Last name" id="txUL0F" />
              </Label>
            </FormFieldLabel>
            <FormFieldControl>
              <TextField value={value} required {...restField} />
            </FormFieldControl>
            <div>
              <FormFieldDescription>
                <FormFieldDescriptionText>
                  <FormattedMessage
                    defaultMessage="Last name description"
                    id="qOefVu"
                  />
                </FormFieldDescriptionText>
              </FormFieldDescription>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </div>
          </FormItem>
        )}
      />
      <Button disabled={form.formState.isSubmitting}>
        <FormattedMessage defaultMessage="Update user name" id="tS+q2C" />
      </Button>
    </Form>
  );
}

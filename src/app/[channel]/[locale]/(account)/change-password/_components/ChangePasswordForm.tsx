'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/FormField/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldDescription} from '@/lib/components/form/FormFieldDescription';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {FormFieldLabel} from '@/lib/components/form/FormFieldLabel';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {Label} from '@/lib/components/ui/Label';
import {TextField} from '@/lib/components/ui/TextField';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {deferInputFocus} from '@/lib/tools/defer-input-focus';

import {Form, FormFieldDescriptionText, FormItem} from '../../_components/Form';
import {SubmitButton} from '../../_components/SubmitButton';
import {FIELDS} from '../_consts';
import type {ChangePasswordFormSchema} from '../_hooks/use-change-password-schema';
import {useChangePasswordSchema} from '../_hooks/use-change-password-schema';
import {useChangePasswordSubmit} from '../_hooks/use-change-password-submit';

interface Props {
  readonly email: string;
  readonly token: string;
}

export function ChangePasswordForm({email, token}: Props) {
  const changePasswordSchema = useChangePasswordSchema();

  const form = useForm<ChangePasswordFormSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const changePasswordSubmit = useChangePasswordSubmit(form, {email, token});

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  return (
    <Form form={form} onSubmit={form.handleSubmit(changePasswordSubmit)}>
      <FormField
        name={FIELDS.PASSWORD}
        control={form.control}
        render={({field: {value, ref, ...restField}}) => (
          <FormItem>
            <FormFieldLabel>
              <Label>
                <FormattedMessage defaultMessage="Password:" id="hagaYK" />
              </Label>
            </FormFieldLabel>
            <FormFieldControl>
              <TextField
                type="password"
                autoComplete="new-password"
                value={value}
                ref={refMountCallback(ref, deferInputFocus)}
                required
                {...restField}
              />
            </FormFieldControl>
            <div>
              <FormFieldDescription>
                <FormFieldDescriptionText>
                  <FormattedMessage
                    defaultMessage="Password description"
                    id="A4RrFD"
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
        name={FIELDS.CONFIRM_PASSWORD}
        control={form.control}
        render={({field: {value, ...restField}}) => (
          <FormItem>
            <FormFieldLabel>
              <Label>
                <FormattedMessage
                  defaultMessage="Confirm password:"
                  id="atD3r4"
                />
              </Label>
            </FormFieldLabel>
            <FormFieldControl>
              <TextField
                type="password"
                autoComplete="password"
                value={value}
                required
                {...restField}
              />
            </FormFieldControl>
            <div>
              <FormFieldDescription>
                <FormFieldDescriptionText>
                  <FormattedMessage
                    defaultMessage="Confirm password description"
                    id="vHV69y"
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
      <SubmitButton loading={form.formState.isSubmitting}>
        <FormattedMessage
          defaultMessage="Change password and log in"
          id="lTr7eP"
        />
      </SubmitButton>
    </Form>
  );
}

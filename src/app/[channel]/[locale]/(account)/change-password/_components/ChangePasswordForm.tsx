'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/FormField';
import {FormFieldDescription} from '@/lib/components/form/FormFieldDescription';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {FormInputControl} from '@/lib/components/form/FormInputControl';
import {Input} from '@/lib/components/ui/Input';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {focusInput} from '@/lib/tools/focus-input';

import {Form} from '../../_components/ui/form/Form';
import {FormInputLabel} from '../../_components/ui/form/FormInputLabel';
import {FormItem} from '../../_components/ui/form/FormItem';
import {SubmitButton} from '../../_components/ui/SubmitButton';
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
            <FormInputLabel>
              <FormattedMessage defaultMessage="Password:" id="hagaYK" />
            </FormInputLabel>
            <FormInputControl>
              <Input
                type="password"
                autoComplete="new-password"
                value={value ?? ''}
                ref={refMountCallback(ref, focusInput)}
                required
                {...restField}
              />
            </FormInputControl>
            <div>
              <FormFieldDescription>
                <FormattedMessage
                  defaultMessage="Password description"
                  id="A4RrFD"
                />
              </FormFieldDescription>
              <FormFieldErrorMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        name={FIELDS.CONFIRM_PASSWORD}
        control={form.control}
        render={({field: {value, ...restField}}) => (
          <FormItem>
            <FormInputLabel>
              <FormattedMessage
                defaultMessage="Confirm password:"
                id="atD3r4"
              />
            </FormInputLabel>
            <FormInputControl>
              <Input
                type="password"
                autoComplete="password"
                value={value ?? ''}
                required
                {...restField}
              />
            </FormInputControl>
            <div>
              <FormFieldDescription>
                <FormattedMessage
                  defaultMessage="Confirm password description"
                  id="vHV69y"
                />
              </FormFieldDescription>
              <FormFieldErrorMessage />
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

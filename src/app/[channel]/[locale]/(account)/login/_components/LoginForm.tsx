'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/FormField';
import {FormFieldDescription} from '@/lib/components/form/FormFieldDescription';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {FormInputControl} from '@/lib/components/form/FormInputControl';
import {FormInputLabel} from '@/lib/components/form/FormInputLabel';
import {Input} from '@/lib/components/ui/Input';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {focusInput} from '@/lib/tools/focus-input';

import {Form} from '../../_components/ui/form/Form';
import {FormItem} from '../../_components/ui/form/FormItem';
import {SubmitButton} from '../../_components/ui/SubmitButton';
import {FIELDS} from '../_consts';
import type {LoginFormSchema} from '../_hooks/use-login-form-schema';
import {useLoginFormSchema} from '../_hooks/use-login-form-schema';
import {useLoginSubmit} from '../_hooks/use-login-submit';
import {RequestPasswordResetLink} from './RequestPasswordResetLink';

export function LoginForm() {
  const loginFormSchema = useLoginFormSchema();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const loginSubmit = useLoginSubmit(form);

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  return (
    <Form form={form} onSubmit={form.handleSubmit(loginSubmit)}>
      <FormField
        name={FIELDS.EMAIL}
        control={form.control}
        render={({field: {value, ref, ...restField}}) => (
          <FormItem>
            <FormInputLabel>
              <FormattedMessage defaultMessage="Email:" id="xpTPb3" />
            </FormInputLabel>
            <FormInputControl>
              <Input
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                value={value ?? ''}
                required
                ref={refMountCallback(ref, focusInput)}
                {...restField}
              />
            </FormInputControl>
            <div>
              <FormFieldDescription>
                <FormattedMessage
                  defaultMessage="Email description"
                  id="RVxG/0"
                />
              </FormFieldDescription>
              <FormFieldErrorMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        name={FIELDS.PASSWORD}
        control={form.control}
        render={({field: {value, ...restField}}) => (
          <FormItem>
            <FormInputLabel>
              <FormattedMessage defaultMessage="Password:" id="hagaYK" />
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
                  defaultMessage="Password description"
                  id="A4RrFD"
                />
              </FormFieldDescription>
              <FormFieldErrorMessage />
            </div>
            <RequestPasswordResetLink />
          </FormItem>
        )}
      />
      <SubmitButton loading={form.formState.isSubmitting}>
        <FormattedMessage defaultMessage="Log in with email" id="vu1wqp" />
      </SubmitButton>
    </Form>
  );
}

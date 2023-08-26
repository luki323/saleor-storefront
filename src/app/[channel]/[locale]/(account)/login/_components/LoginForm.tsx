'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
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
import {useLoginFormSchema} from '../_hooks/use-login-form-schema';
import {useLoginSubmit} from '../_hooks/use-login-submit';
import {RequestPasswordResetLink} from './RequestPasswordResetLink';

export function LoginForm() {
  const loginFormSchema = useLoginFormSchema();

  const form = useForm<Zod.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const loginSubmit = useLoginSubmit(form);

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  return (
    <Form form={form} onSubmit={form.handleSubmit(loginSubmit)}>
      <FormField
        name={FIELDS.EMAIL}
        control={form.control}
        render={({field: {ref, ...restField}}) => (
          <FormItem>
            <FormFieldLabel>
              <Label>
                <FormattedMessage defaultMessage="Email:" id="xpTPb3" />
              </Label>
            </FormFieldLabel>
            <FormFieldControl>
              <TextField
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                required
                ref={refMountCallback(ref, deferInputFocus)}
                {...restField}
              />
            </FormFieldControl>
            <div>
              <FormFieldDescription>
                <FormFieldDescriptionText>
                  <FormattedMessage
                    defaultMessage="Email description"
                    id="RVxG/0"
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
        name={FIELDS.PASSWORD}
        control={form.control}
        render={({field}) => (
          <FormItem>
            <FormFieldLabel>
              <Label>
                <FormattedMessage defaultMessage="Password:" id="hagaYK" />
              </Label>
            </FormFieldLabel>
            <FormFieldControl>
              <TextField
                type="password"
                autoComplete="password"
                required
                {...field}
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
            <RequestPasswordResetLink />
          </FormItem>
        )}
      />
      <SubmitButton disabled={form.formState.isSubmitting}>
        <FormattedMessage defaultMessage="Log in with email" id="vu1wqp" />
      </SubmitButton>
    </Form>
  );
}

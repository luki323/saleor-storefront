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
import type {RequestPasswordResetSchema} from '../_hooks/use-request-password-reset-schema';
import {useRequestPasswordResetSchema} from '../_hooks/use-request-password-reset-schema';
import {useRequestPasswordResetSubmit} from '../_hooks/use-request-password-reset-submit';

export function RequestPasswordResetForm() {
  const requestPasswordResetSchema = useRequestPasswordResetSchema();

  const form = useForm<RequestPasswordResetSchema>({
    resolver: zodResolver(requestPasswordResetSchema),
  });

  const requestPasswordResetSubmit = useRequestPasswordResetSubmit(form);

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  return (
    <Form form={form} onSubmit={form.handleSubmit(requestPasswordResetSubmit)}>
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
      <SubmitButton loading={form.formState.isSubmitting}>
        <FormattedMessage defaultMessage="Send reset link" id="DkQ5Q8" />
      </SubmitButton>
    </Form>
  );
}

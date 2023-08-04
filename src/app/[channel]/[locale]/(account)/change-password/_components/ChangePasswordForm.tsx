'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {Form} from '@/lib/components/form/Form';
import {FormControl} from '@/lib/components/form/FormControl';
import {FormDescription} from '@/lib/components/form/FormDescription';
import {FormErrorMessage} from '@/lib/components/form/FormErrorMessage';
import {FormField} from '@/lib/components/form/FormField';
import {Input} from '@/lib/components/ui/Input';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {cn} from '@/lib/tools/cn';
import {focusInput} from '@/lib/tools/focus-input';

import {FormItem} from '../../_components/FormItem';
import {FormLabel} from '../../_components/FormLabel';
import {SubmitButton} from '../../_components/SubmitButton';
import {FIELDS} from '../_consts/consts';
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
    <Form
      form={form}
      onSubmit={form.handleSubmit(changePasswordSubmit)}
      noValidate
      className={cn('flex flex-col gap-3')}>
      <FormField
        name={FIELDS.PASSWORD}
        control={form.control}
        render={({field: {value, ref, ...restField}}) => (
          <FormItem>
            <FormLabel>
              <FormattedMessage defaultMessage="Password:" id="hagaYK" />
            </FormLabel>
            <FormControl>
              <Input
                type="password"
                value={value ?? ''}
                required
                ref={refMountCallback(ref, focusInput)}
                {...restField}
              />
            </FormControl>
            <div>
              <FormDescription>
                <FormattedMessage
                  defaultMessage="Password description"
                  id="A4RrFD"
                />
              </FormDescription>
              <FormErrorMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        name={FIELDS.CONFIRM_PASSWORD}
        control={form.control}
        render={({field: {value, ...restField}}) => (
          <FormItem>
            <FormLabel>
              <FormattedMessage
                defaultMessage="Confirm password:"
                id="atD3r4"
              />
            </FormLabel>
            <FormControl>
              <Input
                type="password"
                value={value ?? ''}
                required
                {...restField}
              />
            </FormControl>
            <div>
              <FormDescription>
                <FormattedMessage
                  defaultMessage="Confirm password description"
                  id="vHV69y"
                />
              </FormDescription>
              <FormErrorMessage />
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

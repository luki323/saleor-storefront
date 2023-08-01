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
import {Button} from '@/lib/components/ui/Button';
import {Input} from '@/lib/components/ui/Input';
import {Spinner} from '@/lib/components/ui/Spinner';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {cn} from '@/lib/tools/cn';
import {focusInput} from '@/lib/tools/focus-input';

import {FormItem} from '../../_components/FormItem';
import {FormLabel} from '../../_components/FormLabel';
import {FIELDS} from '../_consts';
import type {SignupFormSchema} from '../_hooks/use-signup-form-schema';
import {useSignupFormSchema} from '../_hooks/use-signup-form-schema';
import {useSignupSubmit} from '../_hooks/use-signup-submit';

export function SignupForm() {
  const signupFormSchema = useSignupFormSchema();

  const form = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
  });

  const signupSubmit = useSignupSubmit(form);

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  return (
    <Form<SignupFormSchema>
      form={form}
      onSubmit={form.handleSubmit(signupSubmit)}
      noValidate
      className={cn('flex flex-col gap-3')}>
      <FormField
        name={FIELDS.EMAIL}
        control={form.control}
        render={({field: {value, ref, ...restField}}) => (
          <FormItem>
            <FormLabel>
              <FormattedMessage defaultMessage="Email:" id="xpTPb3" />
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="name@example.com"
                autoComplete="off"
                value={value ?? ''}
                autoFocus
                required
                ref={refMountCallback(ref, focusInput)}
                {...restField}
              />
            </FormControl>
            <div>
              <FormDescription>
                <FormattedMessage
                  defaultMessage="Email description"
                  id="RVxG/0"
                />
              </FormDescription>
              <FormErrorMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        name={FIELDS.PASSWORD}
        control={form.control}
        render={({field: {value, ...restField}}) => (
          <FormItem>
            <FormLabel>
              <FormattedMessage defaultMessage="Password:" id="hagaYK" />
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
                  defaultMessage="Password description"
                  id="A4RrFD"
                />
              </FormDescription>
              <FormErrorMessage />
            </div>
          </FormItem>
        )}
      />
      <Button disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting && (
          <span className={cn('mr-2')}>
            <Spinner />
          </span>
        )}
        <FormattedMessage defaultMessage="Sign up with email" id="pmu7Ih" />
      </Button>
    </Form>
  );
}

'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLogin } from '@/features/auth/hooks/use-login';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Enter a valid email address'
  }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' })
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/dashboard/overview';

  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();

  // Pre-filled with the reqres.in demo credentials from the assessment brief.
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  const onSubmit = (data: UserFormValue) => {
    login(data, {
      onSuccess: () => {
        toast.success('Signed in successfully!');
        router.replace(redirectTo);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-5'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='Enter your email...'
                  autoComplete='email'
                  disabled={isPending}
                  className='h-11'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center justify-between'>
                <FormLabel>Password</FormLabel>
              </div>
              <FormControl>
                <div className='relative'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password...'
                    autoComplete='current-password'
                    disabled={isPending}
                    className='h-11 pr-10'
                    {...field}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword((v) => !v)}
                    className='text-muted-foreground hover:text-foreground absolute inset-y-0 right-3 flex items-center'
                    tabIndex={-1}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <IconEyeOff className='size-4' />
                    ) : (
                      <IconEye className='size-4' />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isPending}
          className='mt-2 h-11 w-full text-[15px] font-semibold'
          type='submit'
        >
          {isPending ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </Form>
  );
}

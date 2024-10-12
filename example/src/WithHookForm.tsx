import { zodResolver } from '@hookform/resolvers/zod';
import {
  SubmitHandler, useForm, FormProvider, Controller,
} from 'react-hook-form';

import z from 'zod';
import { useState } from 'react';
import PasswordChecklist, { validatePasswordChecklist } from 'password-checklist-input';
import clsx from 'clsx';

const inputClassName = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none w-full p-2.5';

const schema = z.object({
  password: z.string()
  /*
   * the following line is commented out because the PasswordChecklist component already checks for the password length
   * .min(8, "Should contain at least 8 characters")
   */
    .max(64, 'Should not exceed 64 characters')
    .superRefine((value: string, ctx: any) => {
      const { allChecksPassed: isAllChecksPassed } = validatePasswordChecklist(value);

      // no need to trigger the error if the password rules are met
      if (isAllChecksPassed) return;
      ctx.addIssue({
        code: 'custom',
        // maybe this message should not be displayed to the user
        message: 'Should contain at least 8 characters, one lowercase, one uppercase, one number, and one special character',
      });
    }),
});

type FormValues = z.infer<typeof schema>;

const WithHookForm = () => {
  const [values, setValues] = useState<FormValues | null>(null);

  console.log('values: ', values);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { password: '' },
  });

  const { handleSubmit, control, formState } = form;

  console.log('formState?.errors?.password?.message: ', formState?.errors?.password);

  const handleFormSubmit: SubmitHandler<FormValues> = (values) => {
    setValues(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col gap-4">
          {/* password input */}
          <Controller
            control={control}
            defaultValue=""
            name="password"
            render={({ field }) => (
              <PasswordChecklist
                {...field}
                placeholder="Enter your password"
                className={clsx(inputClassName, {
                  'border-red-500': Boolean(formState?.errors?.password),
                })}
                /*
                 * display the error message only if the error is not a custom one
                 * helperText={formState?.errors?.password?.type !== 'custom' ? formState?.errors?.password?.message : ''}
                 */
              />
            )}
          />
          {/* button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default WithHookForm;

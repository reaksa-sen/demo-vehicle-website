import { sendMessage } from 'api/strapiApi';
// import { Button } from 'components/Button/Button';
import { useRef, useState } from 'react';
import { ContactSchema, useContactForm } from './types';

interface Input {
  // props: any;
  error?: string;
  name?: string;
  type?: string;
  placeholder?: string;
}

interface TextArea {
  // props: any;
  error?: string;
  name: string;
  placeholder: string;
  rows: number;
}

const HelperText: React.FC<{ error?: string }> = ({ error }) => (
  <small className="text-red-500">{error}</small>
);

const InputBox: React.FC<Input> = ({ error, name, type, placeholder }) => (
  <div className="mb-4 w-full">
    <input
      // {...props}
      className="h-full w-full
       rounded-lg px-2.5 py-3.5 shadow  placeholder:text-gray-500"
      name={name}
      type={type}
      placeholder={placeholder}
    />
    <HelperText error={error} />
  </div>
);

const TextArea: React.FC<TextArea> = ({ error, name, placeholder, rows }) => (
  <div>
    <textarea
      // {...props}
      className=" w-full rounded-lg px-3 py-3 shadow placeholder:text-gray-500"
      id={name}
      name={name}
      placeholder={placeholder}
      rows={rows}
    />
    <HelperText error={error} />
  </div>
);

const Spinner: React.FC = () => (
  <div role="status">
    <svg
      className="inline h-5 w-5 animate-spin fill-primary-600 text-white"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

export const ContactForm: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const { register, reset, handleSubmit, setValue, formState } = useContactForm();

  async function onSubmit(data: ContactSchema) {
    try {
      setLoading(true);
      await sendMessage(data);
      alert('Message sent successfully');
    } catch (error) {
      alert('Something went wrong!');
    } finally {
      setLoading(false);
      // reset({ name: '', message: '', phone: '' });
    }
  }

  return (
    <div>
      <div onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:gap-3 lg:grid-cols-3">
        <InputBox
          // props={register('name', { required: true })}
          error={formState.errors.fullName?.message}
          name="fullname"
          type="text"
          placeholder={'Name'}
        />
        <InputBox
          // props={register('email', { required: true })}
          error={formState.errors.email?.message}
          name="email"
          type="email"
          placeholder="Email"
        />
        <InputBox
          // props={register('phone', { required: true })}
          error={formState.errors.phone?.message}
          name="phone"
          type="text"
          placeholder={'Phone'}
        />
      </div>
      <TextArea
        // props={register('message', { required: true })}
        error={formState.errors.message?.message}
        name="message"
        placeholder={'Message'}
        rows={4}
      />
      <div className="flex flex-col items-center justify-between gap-y-3 py-3 md:flex-row">
        <div className="flex items-center">
          <input id="accept" name="accept" type="checkbox" className="h-4 w-4 accent-primary-500" />
          <label className="ml-2 text-sm">
            I accept the
            <span className="pl-1 text-sm text-primary-500">privacy policy</span>
          </label>
        </div>
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-primary-500 px-9 py-3 text-lg text-white hover:bg-primary-400"
          >
            {isLoading ? (
              <div className="flex flex-row items-start gap-x-2">
                <Spinner /> <span>Sending</span>
              </div>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

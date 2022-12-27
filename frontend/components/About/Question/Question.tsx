import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react';
import { IndentStyle } from 'typescript';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';

const items = [
  {
    title: 'Do you offer any sort of warranty?',
    subtitle:
      'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
  },
  {
    title: 'Do you offer any sort of warranty?',
    subtitle:
      'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
  },
  {
    title: 'Do you offer any sort of warranty?',
    subtitle:
      'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
  },
  {
    title: 'Do you offer any sort of warranty?',
    subtitle:
      'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
  }
];

export const Question: React.FC = () => {
  return (
    <div className="container mb-6 w-full bg-slate-200 mt-7 rounded-2xl ">
      <div className="flex flex-col px-4 lg:px-36">
        <h1 className="mx-auto my-7 text-center">
          <Heading text="Frequently Asked Questions" />
        </h1>
        <div className="flex  flex-col gap-x-3 md:flex-row">
          <div className="mx-auto flex w-full flex-col gap-y-4 md:w-1/2">
            {items.map((item, ind) => {
              return (
                <div key={ind}>
                  <div className="w-full rounded-md bg-white">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${
                              open ? 'rounded-b-none border-b-0 border-primary-500' : ''
                            } flex w-full justify-between rounded-md border px-4 py-4 text-left text-sm font-medium`}
                          >
                            <span>{item.title}</span>
                            <ChevronUpIcon
                              className={`${open ? 'rotate-180 transform ' : ''} h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Transition enter="transition-all duration-500" />
                          <Disclosure.Panel
                            className={`${
                              open ? 'border border-primary-500 ' : ''
                            } rounded-md rounded-t-none px-4 pt-4 pb-2 text-sm text-gray-500`}
                          >
                            {item.subtitle}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex flex-col gap-y-4 md:mt-0 md:w-1/2">
            {items.map((item, ind) => {
              return (
                <div key={ind}>
                  <div className="w-full  rounded-md bg-white ">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${
                              open ? 'rounded-b-none border-b-0 border-primary-500' : ''
                            } flex w-full justify-between rounded-md border px-4 py-4 text-left text-sm font-medium`}
                          >
                            <span>{item.title}</span>
                            <ChevronUpIcon
                              className={`${open ? 'rotate-180 transform ' : ''} h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Transition enter="transition-all duration-500" />
                          <Disclosure.Panel
                            className={`${
                              open ? 'border border-primary-500 ' : ''
                            } rounded-md rounded-t-none px-4 pt-4 pb-2 text-sm text-gray-500`}
                          >
                            {item.subtitle}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='my-9 mx-auto'>
          <Button variant='light'>
            Learn More.
          </Button>
        </div>
      </div>
    </div>
  );
};

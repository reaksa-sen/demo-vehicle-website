import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const people = [
  { name: 'Wade Cooper', number: '(15)' },
  { name: 'Arlene Mccoy', number: '(23)' },
  { name: 'Devon Webb', number: '(51)' },
  { name: 'Tom Cook', number: '(21)' },
  { name: 'Tanya Fox', number: '(11)' },
  { name: 'Hellen Schmidt', number: '(13)' }
];

export const ListBox: React.FC = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button className="relative flex w-full justify-between overflow-auto rounded-lg border border-gray-400 bg-white py-3 px-24 pl-3 text-sm text-gray-900">
          <span>{selected.name}</span>
          <span className=" absolute inset-y-0 right-0 flex items-center overflow-auto pr-1">
            <RiArrowDropDownLine className="h-6 w-6 text-black" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-40 mt-1  w-full rounded-md bg-white py-1 text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  ` relative  cursor-pointer py-2 pl-5 pr-4  ${
                    active ? 'group text-primary-500' : 'text-gray-900'
                  }`
                }
                value={person}
              >
                <span className="flex justify-between">
                  <span>{person.name}</span>
                  <span className="text-sm text-gray-400 group-hover:text-primary-500">
                    {person.number}
                  </span>
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

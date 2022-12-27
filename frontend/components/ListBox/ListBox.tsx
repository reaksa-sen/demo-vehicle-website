import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { number } from 'yup';

interface Person {
  id: number;
  name: string;
  number: string;
}

const people = [
  { id: 1, name: 'All Makes', number: '(15)' },
  { id: 2, name: 'Audi', number: '(7)' },
  { id: 3, name: 'BMW', number: '(21)' },
  { id: 4, name: 'Ford', number: '(12)' },
  { id: 5, name: 'Ferrari', number: '(11)' },
  { id: 6, name: 'Porsche', number: '(9)' }
];

export const ListBox: React.FC = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  return (
    <>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full cursor-pointer overflow-auto rounded-xl border border-gray-400 bg-white">
            <Combobox.Input
              className="w-full py-3 pl-5 text-sm text-gray-900"
              displayValue={person => (person as Person).name}
              onChange={event => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute  inset-y-0 right-0 flex items-center overflow-auto pr-3">
              <RiArrowDropDownLine className="h-6 w-6 text-black" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-40 mt-1 w-full rounded-md bg-white py-1 text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-pointer py-2 px-4 text-gray-800">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map(person => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      ` relative  cursor-pointer py-2 pl-5 pr-4 ${
                        active ? 'group text-primary-500' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    <div className=" flex items-center justify-between">
                      <span>{person.name}</span>
                      <span className="text-sm text-gray-400 group-hover:text-primary-500">
                        {person.number}
                      </span>
                    </div>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
};

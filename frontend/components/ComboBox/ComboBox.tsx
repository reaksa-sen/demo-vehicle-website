import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' }
];
interface Props {
  disable?: boolean;
  name?: string;
  qauntity?: string;
  id?: number;
}

const ComboBoxList: React.FC<Props> = props => {
  const { disable, id, name, qauntity } = props;
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
    <div>
      <Combobox value={selected} onChange={setSelected} disabled={disable}>
        <div className="relative mt-1">
          <div
            className={`${
              disable == true ? 'bg-slate-50' : ''
            } max-w-5 relative cursor-default overflow-hidden rounded-lg bg-white text-left shadow-xl sm:text-sm`}
          >
            <Combobox.Input
              className=" border-none py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={person => (person as any).name}
              onChange={event => setQuery(event.target.value)}
            />
            <Combobox.Button
              className={`${
                disable == true ? 'bg-slate-50' : ''
              } absolute inset-y-0 right-0 flex items-center rounded-lg pr-2`}
            >
              <HiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map(person => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none px-3 py-2 font-sans ${
                        active ? 'font-extrabold text-primary-600' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`flex justify-between truncate ${
                            selected ? 'font-bold text-primary' : 'font-normal'
                          }`}
                        >
                          {person.name}
                          <span className="text-end">({person.id})</span>
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBoxList;

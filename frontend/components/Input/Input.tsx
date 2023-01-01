import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  startIcon?: any;
  endIcon?: any;
  placeholder: string;
}
export const Input: React.FC<Props> = props => {
  const {startIcon, endIcon,placeholder} = props;
  return (
    <div>
      <label className="relative mt-1 block rounded-lg shadow-xl ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 cursor-pointer">{startIcon}</span>
        <input
          className="block w-full rounded-lg border border-slate-300 bg-white py-[15.5px] pl-8 pr-8 shadow-sm placeholder:font-sans placeholder:text-black sm:text-sm"
          placeholder={placeholder}
          type="text"
          name="search"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">{endIcon}</span>
      </label>
    </div>
  );
};

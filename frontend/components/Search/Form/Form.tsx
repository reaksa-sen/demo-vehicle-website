import React from 'react';
import { BiTargetLock } from 'react-icons/bi';
import { Input } from 'components/Input/Input';
import { FiChevronsDown } from 'react-icons/fi';
import ComboBoxList from 'components/ComboBox/ComboBox';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

export const From: React.FC = () => {
  // const icon = props.icon;
  return (
    <div>
      <div className="-mt-4">
        <h1 className="py-4 pl-11">
          <span className="mr-2 text-slate-500">Homepage</span> -{' '}
          <span className="ml-2 text-primary">Search</span>
        </h1>
      </div>
      <div className="h-full w-full bg-slate-200">
        <div className="px-5 py-7 xl:px-16">
          {/* --Form--- */}
          <div className="hidden items-center gap-x-3 gap-y-3 lg:grid lg:grid-cols-4 xl:grid-cols-5">
            <ComboBoxList />
            <ComboBoxList disable={true} />
            <Input
              startIcon={<BiTargetLock className="text-xl text-primary" />}
              placeholder="Location"
            />
            <ComboBoxList disable={true} />
            <ComboBoxList />
            <div className="grid grid-cols-2">
              <Input placeholder="Min Price" />
              <Input placeholder="Max Price" />
            </div>
            <ComboBoxList />
            <ComboBoxList />
            <div className="lg:hidden xl:block">
              <ComboBoxList />
            </div>
            <div className="lg:hidden xl:block">
              <ComboBoxList />
            </div>
          </div>
          {/* --Clear all-- */}
          <div className="mt-5 hidden items-end justify-end lg:flex">
            <div className="right-3 flex items-center gap-x-2">
              <p className="cursor-pointer hover:text-primary-500">Clear all</p>
              <FiChevronsDown className="text-primary" />
              <p className="cursor-pointer hover:text-primary-500">More filters</p>
            </div>
          </div>
          {/* --small screen -- */}
          <div className="block cursor-pointer rounded-lg bg-slate-50 py-3 text-center lg:hidden">
            Filters (0)
          </div>
          <div className="my-7 h-[1px] w-full bg-slate-300 lg:my-4"></div>
          <div className="flex flex-col justify-start gap-y-5 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
            <div className="flex items-center gap-x-2 divide-x-0 divide-slate-400 lg:justify-center lg:gap-x-0 lg:divide-x">
              <p className="cursor-pointer font-sans font-bold text-slate-500 lg:pr-8 lg:text-xl">
                <span className="text-primary-500">All</span>(100)
              </p>
              <p className="cursor-pointer font-sans font-bold text-slate-500 lg:pl-8 lg:pr-8 lg:text-xl">
                <span className="hover:text-primary-500">New</span>(29)
              </p>
              <p className="cursor-pointer font-sans font-bold text-slate-500 lg:pl-8 lg:text-xl">
                <span className="hover:text-primary-500">Used</span>(71)
              </p>
            </div>
            <div className="flex flex-col-reverse gap-y-5 lg:flex-row lg:gap-y-0">
              <div className="mr-2 flex cursor-pointer items-center gap-x-2 hover:text-primary-500">
                <BsArrowLeftRight className="font-bold" />
                <h1 className="mr-2 font-sans text-xl font-bold">Compare</h1>
              </div>
              <div className="lg:w-[300px]">
                <Input endIcon={<FaSearch />} placeholder="Enter Keyword" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

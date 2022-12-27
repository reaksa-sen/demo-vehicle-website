/* eslint-disable @next/next/no-img-element */
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import data from '../public/data/data.json';
import { Button } from './Button';
import { HiPlus, HiX } from 'react-icons/hi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { MdOutlinePersonOutline, MdPeopleAlt } from 'react-icons/md';
interface NavLinkProps {
  href: string;
  name: string;
  exact?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = props => {
  const { href, name, exact } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        className={classNames(
          'rounded-md px-2 py-2 font-sans  hover:text-primary-500 lg:px-3',
          isActive ? 'text-primary-500' : 'text-white'
        )}
      >
        {name}
      </a>
    </Link>
  );
};

const SmNavLink: React.FC<NavLinkProps> = props => {
  const { href, name, exact, onClick } = props;
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        href={href}
        className={classNames(
          'block rounded-md px-3 py-2 font-semibold ',
          isActive ? 'text-primary-500' : 'text-white'
        )}
      >
        {name}
      </a>
    </Link>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-white">
      <MdOutlinePersonOutline className="h-5 w-auto text-primary-500" />
      <h1 className="cursor-pointer text-sm hover:text-primary-500">Log in</h1>
      <div className=" h-4 border-l border-gray-500 "></div>
      <h1 className="cursor-pointer text-sm hover:text-primary-500">Register</h1>
      <Button variant="outline" colors="hover" icon={<HiPlus />}>
        Add Listing
      </Button>
    </div>
  );
};

const NavButton: React.FC<{ onClick: () => void; isNavOpen: boolean }> = ({
  onClick,
  isNavOpen
}) => (
  <button onClick={() => onClick()} type="button" className="block p-2 xl:hidden">
    {isNavOpen && <HiX className="h-7 w-auto fill-current text-primary-500" aria-hidden="true" />}
    {!isNavOpen && (
      <BiMenuAltLeft className="h-7 w-auto fill-current text-primary-500" aria-hidden="true" />
    )}
  </button>
);

const Navigator = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -50) setIsTop(false);
      else setIsTop(true);
    },
    [isTop]
  );

  function handleNavBar() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div
      className={classNames('fixed z-50 w-full', {
        'xl:bg-transparent': isTop,
        'bg-black bg-none': !isTop || isNavOpen
      })}
    >
      <div className="hidden justify-between px-4 py-7 xl:flex">
        <div className="relative flex items-center gap-x-5 ">
          <Link href="/" passHref>
            <a>
              <img src="/images/logo1.png" className="h-8 w-auto cursor-pointer" alt="vehicle" />
            </a>
          </Link>
          {data.navigationBar.map((item, i) => (
            <NavLink key={i} exact href={item.link} name={item.name} />
          ))}
        </div>
        <div>
          <Contact />
        </div>
      </div>

      <div className="block px-4 py-3 xl:hidden">
        <div className="flex items-center justify-between">
          <NavButton onClick={() => handleNavBar()} isNavOpen={isNavOpen} />
          <Link href="/" passHref>
            <img
              src="/images/logo1.png"
              className="h-7 w-auto cursor-pointer sm:h-8"
              alt="Vehicle"
            />
          </Link>
          <MdPeopleAlt className="h-8 w-auto text-white" />
        </div>
      </div>

      <div
        className={classNames('container pl-4 xl:hidden', isNavOpen ? '' : 'hidden')}
        id="mobile-menu"
      >
        <div className="grid-cols grid grid-cols-2 px-2 pt-2 pb-3">
          {data.navigationBar.map((item, i) => (
            <SmNavLink key={i} exact href={item.link} name={item.name} onClick={handleNavBar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigator;

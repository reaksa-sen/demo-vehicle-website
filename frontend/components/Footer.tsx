/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import data from '../public/data/data.json';

const Icon = [
  {
    icon: <FaFacebookF />,
    href: '/'
  },
  {
    icon: <AiOutlineTwitter />,
    href: '/'
  },
  {
    icon: <AiOutlineInstagram />,
    href: '/'
  }
];

const Footer: React.FC = () => {
  return (
    <div className="mt-8 bg-gray-900">
      <div className="container py-8 px-8">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="my-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-6">
            {/* logo */}
            <div className="col-span-2 justify-self-center">
              <img className="h-8 w-auto" src="/images/logo1.png" alt="logo" />
            </div>
            {/* list */}
            <div className="col-span-2 justify-self-center text-white">
              <div className="grid grid-cols-2">
                {data.footer.map(x => (
                  <li
                    className="cursor-pointer list-disc pb-4 text-primary-600 hover:text-primary-500"
                    key={x.name}
                  >
                    <a className="text-white" href={x.link}>
                      {x.name}
                    </a>
                  </li>
                ))}
              </div>
            </div>
            <div className="col-span-2 max-w-[450px] text-white">{data.textFooter}</div>
          </div>
          {/* contact */}
          <div className="flex w-1/2 flex-col items-center md:items-end">
            <p className="flex pb-3 text-3xl font-bold text-white md:text-2xl">
              (123) <span className="text-background">456-78901</span>
            </p>
            <div className="whitespace-pre md:text-center lg:text-start">
              <p className="text-white"> support@vehica.com</p>
              <p className="py-5 text-end text-white">
                West 12th Street <br /> New York, NY, USA
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-gray-700 md:flex-row md:justify-between">
          <div className="mt-6 flex text-base text-white">
            Copyright © 2021. All rights reserved.
            <Link href="/">
              <a className="cursor-pointer underline">Privacy Policy</a>
            </Link>
          </div>
          <div className="mt-6 flex gap-7 md:gap-7 lg:gap-3">
            {Icon.map((x, i) => (
              <Link href={x.href} key={i}>
                <a
                  target={'_blank'}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-400 text-xl hover:bg-gray-300"
                >
                  {x.icon}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

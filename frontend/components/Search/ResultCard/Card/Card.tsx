import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { FeatureCar } from '../FeatureCar/FeatureCar';

interface Props {
  location: string;
  title: string;
  price: string;
  subtitle: string;
  tags?: string[];
  img: string;
  feature?: string;
}

export const Card: React.FC<Props> = props => {
  const { location, title, price, subtitle, tags, img, feature } = props;
  return (
    <div>
      <div className="col-span-12 overflow-hidden rounded-xl shadow-md xl:col-span-12">
        <div className="cursor-pointer grid-cols-12 gap-x-5 rounded-xl border p-5 hover:border-primary-500 xl:grid">
          {/* ---Left--- */}
          <div className="col-span-3">
            <FeatureCar img={img} feature={feature} />
          </div>

          {/* ---Rigth--- */}
          <div className="col-span-9">
            {/* --- Ttile with Star --- */}
            <div className="flex justify-between">
              <div>
                <h1 className="xl:text-xl xl:font-bold">{title}</h1>
                <p className="hidden xl:block xl:pt-2">{subtitle}</p>
              </div>
              <AiOutlineStar className="hidden cursor-pointer rounded-full p-1 text-4xl hover:bg-slate-300 xl:block" />
            </div>

            {/* ---Button and location with price--- */}
            <div className="mt-1 flex flex-col-reverse justify-between gap-y-3 divide-y-2 divide-y-reverse lg:gap-y-0 lg:divide-y-0 xl:mt-3 xl:flex-row">
              {/* ---Button and location*/}
              <div>
                <div className="flex gap-x-2">
                  <div className="w-fit rounded-md bg-primary px-2 text-white">2021</div>
                  <div className="flex">
                    {tags?.map(x => (
                      <li
                        key={x}
                        className="lg:text-md flex list-none items-center text-sm last:hidden lg:last:flex"
                      >
                        <BsDot className="text-xl text-primary-500" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </div>
                </div>
                <h1 className="hidden xl:mt-3 xl:block">
                  <span className="text-primary">Location:</span>
                  {location}
                </h1>
              </div>

              {/* ---Price--- */}
              <div className="-mt-3 xl:-mt-0 xl:text-end">
                <h1 className="my-1 text-2xl font-bold text-primary-500 xl:my-0">${price}</h1>
                <Link href="/">
                  <a className="hidden underline xl:block">Calculate financing</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from 'next/image';
import { Card } from './Card/Card';
import { BsFillGridFill } from 'react-icons/bs';
import { CiGrid2H } from 'react-icons/ci';
import { ListBox } from 'components/ListBox/ListBox';
import PaginationOutlined from '../Pagination/Pagination';

const Items = [
  {
    location: 'New York, NY, USA',
    title: 'BMW 8-serie 2-door coupe grey',
    price: '800,300',
    subtitle: 'Keyless Start, Leather seats, Navigation System, Reversing camera',
    tags: ['Automatic', 'Petro'],
    img: '/car1.jpg'
  },
  {
    location: 'New York, NY, USA',
    title: 'BMW 8-serie 2-door coupe grey',
    price: '800,300',
    subtitle: 'Keyless Start, Leather seats, Navigation System, Reversing camera',
    tags: ['Automatic', 'Petro'],
    img: '/car2.jpg'
  },
  {
    location: 'New York, NY, USA',
    title: 'BMW 8-serie 2-door coupe grey',
    price: '800,300',
    subtitle: 'Keyless Start, Leather seats, Navigation System, Reversing camera',
    tags: ['Automatic', 'Petro'],
    img: '/feature1.jpg'
  },
  {
    location: 'New York, NY, USA',
    title: 'BMW 8-serie 2-door coupe grey',
    price: '800,300',
    subtitle: 'Keyless Start, Leather seats, Navigation System, Reversing camera',
    tags: ['Automatic', 'Petro'],
    img: '/feature2.jpg'
  },
  {
    location: 'New York, NY, USA',
    title: 'BMW 8-serie 2-door coupe grey',
    price: '800,300',
    subtitle: 'Keyless Start, Leather seats, Navigation System, Reversing camera',
    tags: ['Automatic', 'Petro'],
    img: '/car1.jpg'
  },
  {
    location: 'New York, NY, USA',
    title: 'BMW 8-serie 2-door coupe grey',
    price: '800,300',
    subtitle: 'Keyless Start, Leather seats, Navigation System, Reversing camera',
    tags: ['Automatic', 'Petro'],
    img: '/car2.jpg'
  }
];
export const ResultCard: React.FC = () => {
  return (
    <div className="mt-16 px-3 lg:container">
      <div className="mb-8 flex flex-col justify-between sm:flex-row">
        <div>
          <h1 className="mb-3 font-sans text-3xl font-extrabold sm:mb-0">100 Results</h1>
        </div>
        <div className="flex items-center">
          <div className="hidden items-center gap-x-3 lg:flex">
            <BsFillGridFill className="cursor-pointer text-2xl text-slate-500 hover:text-primary-500" />
            <CiGrid2H className="cursor-pointer text-3xl text-primary-500" />
          </div>
          <p className="mx-4 hidden lg:block">Sort By:</p>
          <div className="w-[300px]">
            <ListBox />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-0 lg:gap-x-3">
        <div className="col-span-12 xl:col-span-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
            {Items.map((item, ind) => (
              <Card
                key={ind}
                location={item.location}
                title={item.title}
                price={item.price}
                subtitle={item.subtitle}
                tags={item?.tags}
                img={item.img}
                feature="show"
              />
            ))}
            <Card
              location="Tik Tla, PP, CAM"
              title="Audi A8 4-door sedan silver"
              price="70,000"
              subtitle="Blind-spot, warning, Lane keeping assist, Brake assist"
              img="/feature1.jpg"
              tags={['Automatically', 'SmartCooler']}
            />
          </div>
        </div>
        <div className="sticky top-32 col-span-2 hidden self-start xl:block">
          <div className="aspect-w-4 aspect-h-7 w-full">
            <Image src="/sponsor.png" layout="fill" style={{ objectFit: 'cover' }} alt="images" />
          </div>
        </div>
      </div>
      {/* --Pagination-- */}
      <div className="my-7 flex justify-center self-center">
        <PaginationOutlined/>
      </div>
    </div>
  );
};

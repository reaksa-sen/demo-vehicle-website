import { Lanscape } from '../ImagesCard/landscape';
import { Portrait } from '../ImagesCard/Portrait';

const items = [
  { img: '/pic1.jpg' },
  { img: '/pic2.jpg' },
  { img: '/pic3.jpg' },
  { img: '/pic4.jpg' },
  { img: '/pic5.jpg' },
  { img: '/pic6.jpg' },
];
export const TeamCard: React.FC = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-4 gap-x-2 gap-y-3 lg:gap-x-5 lg:gap-y-6">
        <div className="col-span-4 grid md:col-span-2">
          <Lanscape responsive="aspect-w-16 aspect-h-7 h-full" img="/pic7.jpg" />
        </div>
        {items.map((item, ind) => {
          return (
            <div key={ind} className="col-span-2 grid md:col-span-1">
              <Portrait img={item.img} responsive="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

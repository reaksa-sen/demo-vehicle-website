import { IoMdQuote } from 'react-icons/io';
import { Lanscape } from '../ImagesCard/landscape';
import { YearInBussiness } from './year-in-bussiness';

const items = [
  {title : '158' , subTitle: 'Specialists'},
  {title : '50K' , subTitle: 'Cars sold'},
  {title : '8' , subTitle: 'Localizations'},
]
export const ContactUs: React.FC = () => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-1 gap-x-5 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-3 rounded-2xl bg-slate-200 py-10 md:py-0">
          <h1 className="font-sans text-2xl font-bold">Our CEO say</h1>
          <IoMdQuote className="text-primary-500" />
          <p className="max-w-xs text-center">
            Quality is never an accident; it is always the result of high intention.
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <Lanscape
            img="/pic2.jpg"
            responsive="w-full lg:aspect-w-16 lg:aspect-h-7 md:aspect-w-10 md:aspect-h-10"
          />
        </div>
      </div>
      <div>
      <div className="my-5 container ">
          <div className="flex justify-center md:mx-0 mx-auto flex-col md:justify-between md:flex-row items-center md:divide-x-2">
            <div>
              <YearInBussiness
                title="15"
                subTitle="Years in
                 Business"
                style="col"
              />
            </div>
            <div className="flex md:w-1/2 justify-between px-5 w-full md:mt-0 mt-12 sm:flex-row flex-col sm:gap-y-0 gap-y-5">
              {items.map((item, ind) => (
                <div key={ind}>
                  <YearInBussiness
                  title={item.title}
                  subTitle={item.subTitle}
                />
               </div>
             ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

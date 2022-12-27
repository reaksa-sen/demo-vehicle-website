import { Heading } from 'components/Heading';
import Data from 'Data/Text.json';
import { Portrait } from '../ImagesCard/Portrait';

export const Description: React.FC = () => {
  return (
    <div>
      <Heading text="About us" />
      <div className="grid grid-cols-12 items-center ">
        <div className="col-span-12 grid lg:col-span-8">
          <div className="flex flex-col gap-y-8">
            <h1 className="max-w-xl font-sans font-medium text-slate-700">{Data.firstParagraph}</h1>
            <h2 className="max-w-3xl font-sans text-sm text-slate-500">{Data.secondParagraph}</h2>
            <div className="max-w-xl border-4 border-r-0 border-t-0 border-b-0 border-primary-500 px-5">
              <h2 className="font-sans font-medium text-slate-700">{Data.thirdParagraph}</h2>
            </div>
            <h2 className="max-w-3xl font-sans text-sm text-slate-500">{Data.fourthParagraph}</h2>
          </div>
        </div>
        <div className="col-span-12 mt-5 grid w-full lg:col-span-4 lg:mt-0">
          <Portrait
            img="/pic1.jpg"
            responsive="lg:aspect-w-1 lg:aspect-h-1 aspect-w-2 aspect-h-1"
          />
        </div>
      </div>
    </div>
  );
};

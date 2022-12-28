import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Popular } from 'components/Popular/Popular';

export const HomePopular: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container px-8">
        <div className="flex flex-col items-center justify-center py-10 xl:flex-row xl:justify-between">
          <Heading text={'Popular Makes'} />
          <div className="flex flex-row gap-x-5">
            <Button variant="outline" colors="red">
              <div className="flex flex-col">
                <p className="text-sm">Audi</p>
                <p className="text-xs">14 Listings</p>
              </div>
            </Button>
            <Button variant="filled" colors="white">
              <div className="flex flex-col">
                <p className="text-sm">Audi</p>
                <p className="text-xs">14 Listings</p>
              </div>
            </Button>
            <Button variant="filled" colors="white">
              <div className="flex flex-col">
                <p className="text-sm">Audi</p>
                <p className="text-xs">14 Listings</p>
              </div>
            </Button>
          </div>
        </div>
        <div className="pb-10">
          <Popular />
        </div>
      </div>
    </div>
  );
};

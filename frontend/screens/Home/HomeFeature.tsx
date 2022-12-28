import { Button } from 'components/Button';
import { Feature } from 'components/FeatureListing/Feature';
import { Heading } from 'components/Heading';

export const HomeFeature: React.FC = () => {
  return (
    <div className="container px-8">
      <div className="mb-8 flex flex-col items-center justify-center sm:mb-0 xl:flex-row xl:justify-between">
        <Heading subText="Handy picked" text="Featured Listings" />
        <div className="flex gap-x-4">
          <Button expand variant="outline" colors="red">
            New
          </Button>
          <Button colors="gray" expand>
            Used
          </Button>
        </div>
      </div>
      <Feature />
    </div>
  );
};

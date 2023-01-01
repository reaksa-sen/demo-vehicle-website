import { From } from 'components/Listings/Form/Form';
import { ResultCard } from 'components/Listings/ResultCard/ResultCard';
import { FeatureCar } from 'components/Listings/ResultCard/FeatureCar/FeatureCar';
import { NextPage } from 'next';

const ListingsPage: NextPage = () => {
  return (
    <div className="mt-28">
      <From />
      <ResultCard />
    </div>
  );
};

export default ListingsPage;

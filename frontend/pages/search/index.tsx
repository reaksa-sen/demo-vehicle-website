import { From } from 'components/Search/Form/Form';
import { ResultCard } from 'components/Search/ResultCard/ResultCard';
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

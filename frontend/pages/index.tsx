import Header from 'components/Header';
import { Slider } from 'components/Slider';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
  return (
    <div>
      <Header title="Home" />
      <Slider />
    </div>
  );
};

export default Home;

import Header from 'components/Header';
import { Slider } from 'components/Slider';
import { NextPage } from 'next/types';
import { HomeFeature } from 'screens/Home/HomeFeature';
import { HomePopular } from 'screens/Home/HomePopular';

const Home: NextPage = () => {
  return (
    <div>
      <Header title="Home" />
      <Slider />
      <HomeFeature />
      <HomePopular />
    </div>
  );
};

export default Home;

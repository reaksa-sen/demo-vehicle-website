import Header from 'components/Header';
import { Slider } from 'components/Slider';
import { NextPage } from 'next/types';
import { HomeFeature } from 'screens/Home/HomeFeature';
import { HomeOurService } from 'screens/Home/HomeOurService';
import { HomePartner } from 'screens/Home/HomePartnership';
import { HomePopular } from 'screens/Home/HomePopular';

const Home: NextPage = () => {
  return (
    <div>
      <Header title="Home" />
      <Slider />
      <HomeFeature />
      <HomePopular />
      <HomeOurService />
      <HomePartner />
    </div>
  );
};

export default Home;

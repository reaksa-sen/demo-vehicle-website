import { ContactUs } from 'components/About/Contact-us/Contaxt_us';
import { Description } from 'components/About/Description/Description';
import { Question } from 'components/About/Question/Question';
import { TeamCard } from 'components/About/TeamCard/TeamCard';
import Header from 'components/Header';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const router = useRouter();

  return (
    <div className="container mt-28">
      <Header title={'About'} siteUrl={router.asPath} />
      <Description />
      <ContactUs />
      <TeamCard />
      <Question />
    </div>
  );
};

export default About;

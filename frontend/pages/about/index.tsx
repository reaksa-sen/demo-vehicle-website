import { ContactUs } from 'components/About/Contact-us/Contaxt_us';
import { Description } from 'components/About/Description/Description';
import { Question } from 'components/About/Question/Question';
import { TeamCard } from 'components/About/TeamCard/TeamCard';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div className="container mt-24 px-8">
      <Description />
      <ContactUs />
      <TeamCard />
      <Question />
    </div>
  );
};

export default About;

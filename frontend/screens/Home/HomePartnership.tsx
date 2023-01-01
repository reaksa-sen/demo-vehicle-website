import { ContactDownload } from 'components/Partnership/ContactDownload';
import { NewsLetter } from 'components/Partnership/NewsLetter';
import { Partnership } from 'components/Partnership/Partnership';

export const HomePartner: React.FC = () => {
  return (
    <div className="container my-8 px-8">
      <Partnership />
      <ContactDownload />
      <NewsLetter />
    </div>
  );
};

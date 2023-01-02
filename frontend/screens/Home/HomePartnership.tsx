import { ContactDownload } from 'components/Partnership/ContactDownload';
import { NewsLetter } from 'components/Partnership/NewsLetter';
import { Partners } from 'components/Partnership/Partnership';

export const HomePartner: React.FC = () => {
  return (
    <div className="container my-8 px-8">
      <Partners />
      <ContactDownload />
      <NewsLetter />
    </div>
  );
};

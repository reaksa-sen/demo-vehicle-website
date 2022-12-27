import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import { getContact } from 'api/strapiApi';
import { useQuery } from 'react-query';

const Footer: React.FC = () => {
  const { data } = useQuery('footer', () => getContact());

  const {
    facebook_url = '',
    youtube_url = '',
    instagram_url = '',
    tiktok_url = '',
    twitter_url = '',
  } = data?.data?.attributes || {};
  return (
    <footer className="container h-full py-8">
      <div className="flex flex-col items-center justify-center border-t border-gray-700 md:flex-row md:justify-between">
        <p className="mt-6 text-base text-black">© 2022 LD Entertainment. All rights reserved.</p>
        <div className="mt-6 flex space-x-6 text-black">
          <a rel="noreferrer" target="_blank" href={facebook_url}>
            <Facebook className="cursor-pointer hover:text-blue-600" size="24" />
          </a>
          <a rel="noreferrer" target="_blank" href={youtube_url}>
            <Youtube size="24" className="cursor-pointer hover:text-red-600" />
          </a>
          <a rel="noreferrer" target="_blank" href={instagram_url}>
            <Instagram size="24" className="cursor-pointer hover:text-pink-500" />
          </a>
          <a rel="noreferrer" target="_blank" href={tiktok_url}>
            <Tiktok size="24" className="cursor-pointer hover:text-gray-700" />
          </a>
          <a rel="noreferrer" target="_blank" href={twitter_url}>
            <Twitter size="24" className="cursor-pointer hover:text-sky-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

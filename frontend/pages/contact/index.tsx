import { Heading } from 'components/Heading';
import { NextPage } from 'next';
import { GrMail } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ContactForm } from 'screens/contact/ContactForm';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Icon = [
  {
    icon: <FaFacebookF />,
    href: '/'
  },
  {
    icon: <AiOutlineTwitter />,
    href: '/'
  },
  {
    icon: <AiOutlineInstagram />,
    href: '/'
  }
];
const Contact: NextPage = () => {
  const router = useRouter();
  return (
    <div className="container mt-28">
      <Header title={'About'} siteUrl={router.asPath} />
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="flex justify-center md:justify-center lg:justify-start">
            <Heading text="Contact us" />
          </div>
          <div className="mx-auto max-w-sm text-center sm:max-w-sm md:text-center lg:mx-0 lg:max-w-lg lg:text-start">
            <p className="mt-4 md:mt-6">
              Award-winning, family owned dealership of new and pre-owned vehicles with several
              locations across the city. Lowest prices and the best customer service guaranteed.
            </p>
            <p className="mb-4 pt-9 md:mb-10 md:pt-10">
              West 12th Street <br /> New York, NY, USA
            </p>
          </div>
          <div className="text-center md:text-center lg:text-start">
            <p className="pb-7 text-3xl font-bold md:pb-0 md:text-2xl">
              (123) <span className="text-background">456-78901</span>
            </p>
            <div className="mb-9 flex items-center justify-center md:justify-center lg:justify-start">
              <GrMail className="text-xl text-background" />
              <p className="pl-2"> support@vehica.com</p>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center md:flex-col md:justify-center lg:flex-row lg:justify-start">
            <p className="mb-5 mr-3 font-sans font-semibold text-gray-400 md:mb-5 lg:mb-0">
              Follow us
            </p>
            <div className="flex gap-7 md:gap-7 lg:gap-3">
              {Icon.map((x, i) => (
                <Link href={x.href} key={i}>
                  <a
                    target={'_blank'}
                    className="flex h-10 w-10 cursor-pointer  items-center justify-center rounded-full bg-gray-200 text-xl hover:bg-gray-300"
                  >
                    {x.icon}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mx-auto rounded-2xl bg-bluesky-500 px-5 py-8 md:max-w-md lg:mx-0 lg:max-w-full lg:px-12 lg:py-14">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className=" mt-12  flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.31031077307077!2d104.92105846851845!3d11.554368815449529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513d577464f9%3A0xce74c8b169973bd1!2sOneworld%20Technology!5e0!3m2!1sen!2skh!4v1671770209426!5m2!1sen!2skh"
          width="100%"
          height="500"
          className="w-full rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

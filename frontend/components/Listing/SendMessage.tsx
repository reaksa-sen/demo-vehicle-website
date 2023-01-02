/* eslint-disable @next/next/no-img-element */
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { ContactForm } from 'screens/contact/ContactForm';
import { Button } from 'components/Button';
import { Title } from 'components/Title';
export const SendMessage: React.FC = () => {
  return (
    <div className="bg-bluesky-500">
      <div className="container grid grid-cols-1 gap-7 py-16  lg:grid-cols-4">
        <div className="col-span-2">
          <div className="py-6">
            <Title variant="h4">SendMessage</Title>
          </div>
          <ContactForm />
        </div>
        <div className="col-span-2">
          <div className="mx-auto mt-12 flex w-full justify-between rounded-xl bg-white shadow lg:max-w-md">
            <div className="ml-8 pb-7">
              <h2 className="pt-6 text-xl font-bold">Sophia Kennith</h2>
              <p className="text-primary-500">Custumer Advisor</p>
              <p className="flex items-center pt-4 text-sm">
                <MdLocationOn className="mr-2 text-lg text-primary-500" />
                <span>70 Washington Street</span>
              </p>
            </div>
            <div className="mr-8 mt-6">
              <img src="/img/textbg.jpg" alt="helo" className="h-16 w-16 rounded-full" />
            </div>
          </div>
          {/* box2  */}
          <div className="z-10 mx-auto w-full rounded-xl bg-white shadow lg:max-w-md">
            <div className="mx-8 pb-8">
              <p className="mb-5 flex items-center pt-9">
                <GrMail className="mr-2 text-lg text-primary-500" />
                <span>sophia@vehica.com</span>
              </p>
              <Button variant="outline" colors="white" fullWidth>
                <FaPhoneAlt className="text-xl text-primary" />
                <Title variant="h5">123 *** *** - reveal</Title>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

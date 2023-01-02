import { RxDotFilled } from 'react-icons/rx';
import { AiOutlineStar } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

export const CarInformation: React.FC = () => {
  // const { icon, carlistinfo } = props;

  const Cardetailinformationdata = [
    {
      type: 'Make:',
      detail: 'Porche'
    },
    {
      type: 'Model:',
      detail: 'Macan'
    },
    {
      type: 'Color:',
      detail: 'Blue'
    },
    {
      type: 'Drive Type:',
      detail: 'Front Wheel Drive'
    },
    {
      type: 'Transmission:',
      detail: 'Automatic'
    },
    {
      type: 'Condition:',
      detail: 'Used'
    },
    {
      type: 'Year:',
      detail: '2018'
    },
    {
      type: 'Mileage:',
      detail: '190,000 miles'
    },
    {
      type: 'Fuel Type:',
      detail: 'Disel'
    },
    {
      type: 'Engine Size:',
      detail: '4.8L'
    },
    {
      type: 'Door:',
      detail: '5-door'
    },
    {
      type: 'Cylinders:',
      detail: '6'
    },
    {
      type: 'Color:',
      detail: 'Blue'
    },
    {
      type: 'VIN:',
      detail: '1C4TJPBA1CD801832'
    }
  ];

  return (
    // car detail
    <div className=" mx-2 grid gap-5 rounded-xl bg-bluesky-500 sm:mx-0 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2">
      <div className="col-span-1 pt-6">
        {Cardetailinformationdata.map((itemstype, ind) => (
          <div className="pl-2 text-sm font-semibold sm:text-base md:pl-12" key={ind}>
            {itemstype.type}
            {/* kea dak bos tharin  */}
          </div>
        ))}
      </div>
      <div className="col-span-1 pt-6 pb-7  pl-4">
        {Cardetailinformationdata.map((itemsdetail, index) => (
          <div className="pl-0 text-sm text-gray-600 sm:text-base lg:pl-4" key={index}>
            {itemsdetail.detail}
          </div>
        ))}
      </div>
      <div className="col-span-2 bg-white px-5 pt-8 sm:px-12 md:px-0 lg:bg-transparent xl:bg-white">
        <Button variant="outline" colors="white" fullWidth>
          <FaPhoneAlt className="text-xl text-primary" />
          <Title variant="h5">123 *** *** - reveal</Title>
        </Button>
        <div className="my-4">
          <Button colors="green" fullWidth>
            <BsWhatsapp className="text-xl" />
            <Title variant="h5" color="white">
              Chat via WhatsApp
            </Title>
          </Button>
        </div>
        <Button variant="light" fullWidth>
          <Title variant="h5" color="white">
            Send message
          </Title>
        </Button>
        <div className=" mt-7">
          <p className="text-center">Offer ID #9538</p>
          <div className="mt-2 flex h-9 items-center justify-center gap-x-3">
            <Button colors="green">
              <div className="flex items-center">
                <BsFacebook className="pr-1 text-xl" />
                Share
              </div>
            </Button>
            <Button colors="gray">
              <div className="flex items-center">
                <AiOutlineTwitter className="pr-1 text-xl" />
                Tweet
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

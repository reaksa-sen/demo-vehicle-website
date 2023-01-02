import { Button } from 'components/Button';
import { Title } from 'components/Title';
import Image from 'next/image';
import { FaRegCheckCircle } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';

export const Vehiclehistory: React.FC = () => {
  const VehiclehistoryBtnData = [
    {
      variant: 'filled',
      size: 'medium',
      btnicon: <FaRegCheckCircle className="text-2xl text-orange-500 " />,
      text: 'Backup Camera'
    },
    {
      variant: 'filled',
      size: 'medium',
      btnicon: <FaRegCheckCircle className="text-2xl text-orange-500 " />,
      text: 'Blind-spot warning'
    },
    {
      variant: 'filled',
      size: 'medium',
      btnicon: <FaRegCheckCircle className="text-2xl text-orange-500 " />,
      text: 'Brake assist'
    },
    {
      variant: 'filled',
      size: 'medium',
      btnicon: <FaRegCheckCircle className="text-2xl text-orange-500 " />,
      text: 'Parking assist systems'
    },
    {
      variant: 'filled',
      size: 'medium',
      btnicon: <FaRegCheckCircle className="text-2xl text-orange-500 " />,
      text: 'Pedestrian detection'
    }
  ];

  const Featuredata = [
    {
      icon: <RxDotFilled className="text-2xl text-orange-500" />,
      featuretext: 'BLuetooth'
    },
    {
      icon: <RxDotFilled className="text-2xl text-orange-500" />,
      featuretext: 'Heated seats'
    },
    {
      icon: <RxDotFilled className="text-2xl text-orange-500" />,
      featuretext: 'Keyless start'
    },
    {
      icon: <RxDotFilled className="text-2xl text-orange-500" />,
      featuretext: 'Memory seat'
    },
    {
      icon: <RxDotFilled className="text-2xl text-orange-500" />,
      featuretext: 'Reversing camera'
    },
    {
      icon: <RxDotFilled className="text-2xl text-orange-500" />,
      featuretext: 'Sound system'
    }
  ];
  return (
    // Description
    <div>
      <div className="divide-y-2 divide-white">
        <div className="rounded-t-xl bg-bluesky-500 px-9 pb-10 pt-9">
          <div className="flex flex-col flex-wrap gap-2 sm:flex-row">
            {VehiclehistoryBtnData.map((item, index) => (
              <Button key={index}>
                <div className="sm:row flex items-center gap-x-2 text-2xl text-orange-500">
                  {item.btnicon}
                  <span className="py-2 text-base text-black">{item.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
        <div className="  rounded-b-xl bg-bluesky-500">
          <div className="mx-9 mt-6 mb-7 text-center lg:text-start">
            <Title variant="h4" fontweight="bold">
              Vehicle history
            </Title>
          </div>
          <div className="flex justify-between">
            <div className="w-full md:p-0 lg:pl-9">
              <div className="flex flex-col justify-between lg:flex-row">
                <div className="mb-7 flex h-12 justify-center lg:mb-0 lg:justify-start">
                  <Button colors="red" size="medium" variant="outline">
                    <p className="px-2 font-semibold">Download report</p>
                  </Button>
                </div>
                <div className="mx-auto mb-7 lg:mb-0">
                  <p className="text-md max-w-[270px] text-center text-gray-600 lg:text-start">
                    Before you decide to buy a car, read its
                    <span className="text-orange-500 underline">history</span>
                    for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 mb-8 hidden items-center gap-x-1 px-9 pb-6 sm:hidden lg:flex">
            <Image width={120} height={20} alt="carfaximage" src="/Carfax.jpg" />
            <Image width={70} height={20} alt="paypalimage" src="/paypallogonobg1.jpg" />
          </div>
        </div>
      </div>
      {/* Video section */}
      <div className="mt-9">
        <Title variant="h4" fontweight="bold">
          Video
        </Title>
        <div className="aspect-w-3 aspect-h-[1.7] mt-7 bg-red-500">
          <iframe
            src="https://player.vimeo.com/video/583344459?h=a15b85a09f&dnt=1&app_id=122963"
            width="100%"
            height="220"
            className="absolute w-full bg-yellow-400"
          ></iframe>
        </div>
      </div>
      {/* Feature  */}
      <div className="mt-9">
        <Title variant="h4" fontweight="bold">
          Feature
        </Title>
        <div className="mt-7 grid gap-y-3 lg:grid-cols-3">
          {Featuredata.map(items => (
            <div key={items.featuretext} className="col-span-1 flex items-center">
              {items.icon}
              {items.featuretext}
            </div>
          ))}
        </div>
      </div>
      {/* Attactment  */}
      <div className="mt-9">
        <Title variant="h4" fontweight="bold">
          Attactment
        </Title>
        <div className="mt-7 mb-4 flex items-center">
          <div className="w-12">
            <Image
              src="/pdficon.svg"
              width={1}
              height={1}
              alt="jj"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <span className="ml-3">Sample PDF File</span>
        </div>
        <div className="flex items-center">
          <div className="w-12">
            <Image
              src="/zipicon.svg"
              width={1}
              height={1}
              alt="jj"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <span className="ml-3">Notes and some related files</span>
        </div>
      </div>
      {/* Location  */}
      <div className="mt-9">
        <Title variant="h4" fontweight="bold">
          Location
        </Title>
        <div className="aspect-w-3 aspect-h-[1.5] mt-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.31031077307077!2d104.92105846851845!3d11.554368815449529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513d577464f9%3A0xce74c8b169973bd1!2sOneworld%20Technology!5e0!3m2!1sen!2skh!4v1671770209426!5m2!1sen!2skh"
            height="200"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

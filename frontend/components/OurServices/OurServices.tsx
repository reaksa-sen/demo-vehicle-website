import { BsPhoneVibrate } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { RiMedalLine } from 'react-icons/ri';

interface ChooseUsCardProps {
  icon: any;
  iconColor: string;
  iconBackground: string;
  title: string;
  description: string;
}

const ServiceCardItem: React.FC<ChooseUsCardProps> = props => {
  const { icon, iconColor, iconBackground, title, description } = props;
  return (
    <div className="container">
      <div>
        <div className="mb-12 flex h-20 justify-center">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full ${iconBackground}`}
          >
            <div className={`text-3xl ${iconColor}`}>{icon}</div>
          </div>
        </div>
        <div>
          <p className="text-center text-xl font-semibold sm:text-2xl">{title}</p>
          <p className="mx-auto max-w-xs pt-7 pb-7 text-center text-lg md:mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const OurServiceList: React.FC = () => {
  const ChooseUsData = [
    {
      icon: <RiMedalLine />,
      iconColor: 'text-orange-500',
      iconBackground: 'bg-orange-50',
      title: 'Wide range of brands',
      description:
        'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
    },
    {
      icon: <FaHandshake />,
      iconColor: 'text-green-500',
      iconBackground: 'bg-green-50',
      title: 'Wide range of brands',
      description:
        'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
    },
    {
      icon: <BsPhoneVibrate />,
      iconColor: 'text-blue-500',
      iconBackground: 'bg-blue-50',
      title: 'Wide range of brands',
      description:
        'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
    }
  ];
  return (
    <>
      <h1 className="my-28 text-center text-4xl font-black">Why choose us?</h1>
      <div className="container grid h-full grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-3">
        {ChooseUsData.map(items => (
          <div
            key={items.title}
            className="col-span-1 md:col-span-2 last:md:col-[2/4] lg:col-span-1 last:lg:col-span-1"
          >
            <ServiceCardItem
              icon={items.icon}
              iconColor={items.iconColor}
              iconBackground={items.iconBackground}
              title={items.title}
              description={items.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

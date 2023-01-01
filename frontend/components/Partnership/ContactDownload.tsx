import { Button } from 'components/Button';
import { DiApple, DiAndroid } from 'react-icons/di';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Title } from 'components/Title';

const list = [
  {
    icon: <BsFillCheckCircleFill />,
    text: 'best deals'
  },
  {
    icon: <BsFillCheckCircleFill />,
    text: 'sell your car'
  },
  {
    icon: <BsFillCheckCircleFill />,
    text: 'car book values'
  },
  {
    icon: <BsFillCheckCircleFill />,
    text: 'car dealers'
  },
  {
    icon: <BsFillCheckCircleFill />,
    text: 'compare prices'
  }
];

export const ContactDownload: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <div className="rounded-md bg-primary-500 p-10">
        <div className="pb-3">
          <Title color="white">Download</Title>
        </div>
        <Title color="white">our app</Title>
        <div className="flex flex-col items-start gap-3 pt-5">
          <Button icon={<DiApple className="h-5 w-auto text-primary-500" />}>For iOS</Button>
          <Button icon={<DiAndroid className="h-5 w-auto text-primary-500" />}>For Android</Button>
        </div>
      </div>

      {/*right */}
      <div className=" flex justify-between gap-x-5 rounded-md bg-gray-900 p-10 xl:justify-start">
        <div>
          <Title color="white">How to buy</Title>
          <div className="py-6">
            <Title color="white">a car?</Title>
          </div>
          <Button variant="outline" colors="hover">
            Read more
          </Button>
        </div>
        <div>
          {list.map((x, i) => (
            <div key={i} className="mt-3 flex flex-col">
              <div className="flex items-center gap-x-2 gap-y-4">
                <span className="text-primary-500">{x.icon}</span>
                <h1 className="text-white">{x.text}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

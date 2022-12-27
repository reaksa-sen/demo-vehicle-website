import Image from 'next/image';

interface Props {
  img: string;
  responsive: string;
}

export const Portrait: React.FC<Props> = props => {
  const { img, responsive } = props;

  return (
    <div>
      <div className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl ${responsive}`}>
        <Image src={img} layout="fill" objectFit="cover" alt="images" />
      </div>
    </div>
  );
};

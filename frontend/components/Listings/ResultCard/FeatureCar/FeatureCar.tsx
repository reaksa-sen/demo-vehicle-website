import Image from "next/image";
interface Props {
    img: string;
    feature?: string;
  }
  export const FeatureCar: React.FC<Props> = (props) => {
    const { img, feature} = props;
    return (
        <div>
            <div className="aspect-w-7 aspect-h-4 rounded-2xl overflow-hidden w-full relative">
                <Image src={img} layout='fill' objectFit="cover" alt={img} />
                <h1 className={`${feature === 'show' ? 'absolute bg-primary-500 w-fit h-fit px-8 text-center -rotate-[45deg] -left-7 top-5 text-white' : 'hidden'}`}>Feature</h1>
            </div>  
      </div>
    );
  };
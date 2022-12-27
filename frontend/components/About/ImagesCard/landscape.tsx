import Image from "next/image";

interface Props {
    img: string,
    responsive:string
  }
  
  export const Lanscape: React.FC<Props> = (props) => {
      const { img, responsive } = props;
      
    return (
      <div>
        <div className={`aspect-w-16 aspect-h-7 rounded-2xl overflow-hidden ${responsive}`}>
               <Image src={img} layout='fill' objectFit="cover" alt={"images"}/>
            </div>
      </div>
    );
  };
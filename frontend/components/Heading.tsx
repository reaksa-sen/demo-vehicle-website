interface HeadingProps {
  text: string;
  subText?: string;
}

export const Heading: React.FC<HeadingProps> = ({ text, subText }) => {
  return (
    <div className="my-4 flex items-center justify-between pb-2">
      <div>
        {subText && <h1 className="my-4 text-2xl text-primary-500">{subText}</h1>}
        <h1 className="text-[38px] font-black leading-tight text-gray-900 md:text-6xl lg:text-5xl ">
          {text}
        </h1>
      </div>
    </div>
  );
};

import { Button } from 'components/Button';
import { Title } from 'components/Title';

export const NewsLetter: React.FC = () => {
  return (
    <div className="mt-10 border-t-2 border-b-gray-500">
      <div className="container flex flex-col flex-wrap items-center justify-between pt-10 lg:flex-row lg:gap-x-4">
        <div className="pb-2 text-center lg:pb-0 lg:text-start">
          <Title variant="h2">Newsletter</Title>
        </div>
        <div className=" order-2 mx-auto mt-2 flex w-full max-w-sm flex-col lg:order-none lg:mx-0 lg:w-auto lg:flex-row lg:space-x-3">
          <input
            type="text"
            placeholder="Your email address"
            className="mb-3 rounded-md border py-2 px-16 pl-2 placeholder:text-sm lg:mb-0"
          />
          <Button variant="light">Sign up</Button>
        </div>
        <div className="order-1 flex justify-center lg:order-none lg:mt-3 lg:justify-start xl:mt-2 ">
          <p className="lg:text-md max-w-xs  text-center lg:max-w-none lg:text-start">
            Subscribe to our newsletter and stay updated with our offer
          </p>
        </div>
      </div>
    </div>
  );
};

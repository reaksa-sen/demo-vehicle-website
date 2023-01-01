import { Button } from 'components/Button';
import { Title } from 'components/Title';

export const NewsLetter: React.FC = () => {
  return (
    <div className="mt-10 border-t-2 border-b-gray-500">
      <div className="container pt-10">
        <div className="grid grid-cols-1 justify-items-center gap-y-6 lg:grid-cols-4">
          <div>
            <Title variant="h2">NewsLetter</Title>
          </div>
          <div className="col-span-2 space-x-4">
            <input
              type="text"
              placeholder="Your email address"
              className="rounded-md border border-gray-300 py-2 px-16 pl-2 placeholder:text-sm"
            />
            <Button variant="light">Sign up</Button>
          </div>
          <div>
            <p>Subscribe to our newsletter and stay updated with our offer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

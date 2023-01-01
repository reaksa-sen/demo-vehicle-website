import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
// import { ButtonHTMLAttributes } from "react";

const title = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold md:text-5xl font-sans',
      h2: 'text-3xl font-extrabold text-gray-900 md:text-4xl font-sans',
      h3: 'text-2xl font-extrabold md:text-3xl font-sans',
      h4: 'text-xl font-semibold md:text-2xl font-sans',
      h5: 'text-lg md:text-[22px] font-sans'
    },
    color: {
      gray: 'text-gray-600',
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary'
    },
    fontweight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      extrabold: 'font-extrabold',
      thin: 'font-thin'
    }
  },
  defaultVariants: {
    variant: 'h1',
    color: 'black'
  }
});

interface TitleProps extends VariantProps<typeof title> {
  children: React.ReactNode;
}

export const Title = ({ children, variant, color, fontweight }: TitleProps) => {
  return <h1 className={title({ variant, color, fontweight })}>{children}</h1>;
};

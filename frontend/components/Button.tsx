import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const button = cva('rounded-md relative', {
  variants: {
    variant: {
      filled: 'bg-white bg-primary-500 ',
      light: 'bg-primary-500 text-white hover:bg-primary-400',
      outline: 'bg-transparent border border-primary-500 text-primary-500'
    },
    modifier: {
      // outline: 'bg-transparent border border-primary-500 ',
      // plain: 'shadow-none bg-transparent border-none px-2 py-1 text-sm'
    },
    colors: {
      red: ['bg-primary-100', 'text-primary-500'],
      gray: [
        'bg-gray-300/30',
        'text-black',
        'hover:bg-primary-100',
        'hover:border hover:border-primary-500'
      ],
      white: ['bg-white', 'text-gray-800'],
      green: ['bg-green-500', 'text-white'],
      hover: ['hover:bg-primary-500 hover:text-white']
    },
    size: {
      slim: 'text-sm',
      medium: 'text-md'
    },
    expand: {
      true: 'px-11 py-2'
    },
    fullWidth: {
      true: 'w-full'
    }
  },
  compoundVariants: [
    {
      modifier: undefined,
      size: 'slim',
      className: 'px-3 py-[3px]'
    },
    {
      // modifier: 'outline',
      size: 'slim',
      className: 'px-3 py-[3px]'
    },
    {
      modifier: undefined,
      size: 'medium',
      className: 'px-4 py-2'
    },
    {
      // modifier: 'outline',
      size: 'medium',
      className: 'px-4 py-2'
    }
  ],
  defaultVariants: {
    variant: 'filled',
    size: 'medium'
  }
});

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {
  children?: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  variant,
  modifier,
  size,
  expand,
  colors,
  fullWidth,
  icon
}: ButtonProps) => {
  return (
    <button className={button({ variant, expand, colors, modifier, size, fullWidth })}>
      <span className="flex items-center justify-center gap-x-2 leading-[1.5rem]">
        {icon}
        {children}
      </span>
    </button>
  );
};

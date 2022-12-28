import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

const button = cva('rounded-md relative', {
  variants: {
    variant: {
      filled: 'bg-white ',
      light: 'bg-primary-500 text-white hover:bg-primary-400',
      outline: 'bg-transparent border border-primary-500 text-primary-500'
    },
    colors: {
      red: ['bg-primary-100', 'text-primary-500'],
      gray: [
        'bg-gray-300/30',
        'text-black',
        'hover:bg-primary-100',
        'hover:border hover:border-primary-500'
      ],
      white: [
        'bg-white',
        'text-gray-800',
        'hover:border hover:border-primary-500',
        'hover:bg-primary-100'
      ],
      green: ['bg-green-500', 'text-white'],
      hover: ['hover:bg-primary-500 hover:text-white']
    },
    size: {
      slim: 'text-sm',
      medium: 'text-md'
    },
    expand: {
      true: 'px-12 py-2'
    },
    fullWidth: {
      true: 'w-full'
    }
  },
  compoundVariants: [
    {
      size: 'slim',
      className: 'px-3 py-[3px]'
    },

    {
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
  href?: string;
}

export const Button = ({
  children,
  variant,
  size,
  expand,
  colors,
  href,
  fullWidth,
  icon
}: ButtonProps) => {
  return (
    <button className={button({ variant, expand, colors, size, fullWidth })}>
      <Link href={href ?? ''}>
        <span className="flex items-center justify-center gap-x-2 ">
          {icon}
          {children}
        </span>
      </Link>
    </button>
  );
};

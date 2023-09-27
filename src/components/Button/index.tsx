import React from 'react';

// const variants = {
// 	fill: {
// 		indigo_800: 'bg-indigo-800 shadow-bs text-white-A700',
// 		white_A700: 'bg-white-A700 shadow-bs text-indigo-800',
// 	},
// } as const;

const sizes = { xs: 'py-px', sm: 'p-1', md: 'p-2' } as const;

export type ButtonProps = Omit<
	React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
	'onClick'
> &
	Partial<{
		className: string;
		shape: string | 'rounded' | 'square';
		variant: string;
		size: keyof typeof sizes;
		color: string;
		leftIcon: React.ReactNode;
		rightIcon: React.ReactNode;
		onClick: () => void;
	}>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
	children,
	className = '',
	leftIcon,
	rightIcon,
	shape = '',
	size = 'md',
	variant = '',
	...restProps
}) => {
	return (
		<button className={`${className} ${shape || ''} ${(size && sizes[size]) || ''} ${variant || ''}`} {...restProps}>
			{!!leftIcon && leftIcon}
			{children}
			{!!rightIcon && rightIcon}
		</button>
	);
};

export { Button };

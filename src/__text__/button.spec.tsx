import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ButtonProps } from '../components/Button';

describe('Button Component', () => {
	it('renders with default props', () => {
		render(<Button>Click me</Button>);

		const button = screen.getByText('Click me');

		// Assert that the button is in the document
		expect(button).toBeInTheDocument();
	});

	it('renders with custom props', () => {
		const customProps: ButtonProps = {
			className: 'custom-class',
			shape: 'rounded',
			size: 'sm',
			variant: 'custom-variant',
		};

		render(<Button {...customProps}>Custom Button</Button>);

		const button = screen.getByText('Custom Button');

		expect(button).toBeInTheDocument();

		expect(button).toHaveClass('custom-class');
		expect(button).toHaveClass('rounded');
		expect(button).toHaveClass('p-1'); // Assuming 'sm' corresponds to 'p-1' based on the sizes object
		expect(button).toHaveClass('custom-variant');
	});
});

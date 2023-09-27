import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text, TextProps } from '../components/Text';

describe('Text Component', () => {
	it('renders with default props', () => {
		render(<Text>Default Text</Text>);

		const text = screen.getByText('Default Text');

		expect(text).toBeInTheDocument();
	});

	it('renders with custom props', () => {
		const customProps: TextProps = {
			className: 'custom-class',
			size: 'txtLatoRegular16',
			as: 'span',
		};

		render(<Text {...customProps}>Custom Text</Text>);

		const text = screen.getByText('Custom Text');

		expect(text).toBeInTheDocument();

		expect(text).toHaveClass('custom-class');
		expect(text).toHaveClass('font-lato');
		expect(text).toHaveClass('font-normal');
	});

	it('renders with an "as" prop', () => {
		const customProps: TextProps = {
			as: 'h1',
		};

		render(<Text {...customProps}>Header Text</Text>);

		const header = screen.getByText('Header Text');

		expect(header.tagName.toLowerCase()).toBe('h1');
	});
});

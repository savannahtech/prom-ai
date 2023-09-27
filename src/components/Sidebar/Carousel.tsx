import { useRef } from 'react';
import { LeftCarouselIcon, RightCarouselIcon } from '../../assets/svg';

const SCROLL_AMOUNT = 50;

export const Carousel = () => {
	const scrollingDivRef = useRef<HTMLDivElement | null>(null);

	// scroll horizontally with the arrow is pressed
	const slide = (shift: number) => {
		if (scrollingDivRef.current) {
			const container = scrollingDivRef.current;
			const scrollAmount = container.scrollLeft + shift;

			container.scrollTo({
				left: scrollAmount,
				behavior: 'smooth', // Add smooth scrolling behavior
			});
		}
	};

	const carouselItems = ['floors', 'Lines', 'Stations', 'parts', 'MoreItem1'];

	return (
		<div className="flex w-full">
			<button className="py-1 px-0 mr-3" onClick={() => slide(-SCROLL_AMOUNT)}>
				<LeftCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</button>
			<div className="flex bg-white overflow-auto no-scrollbar w-full" ref={scrollingDivRef}>
				{carouselItems.map((item, index) => (
					<span
						key={`${item}-${index}`}
						className={`py-1 px-4 border border-primary text-sm uppercase ${
							index % 2 === 1 ? 'border-r-0 border-l-0' : ''
						} ${item === 'Stations' ? 'font-bold bg-primary text-white' : 'font-light '}`} // imitating selected
					>
						{item}
					</span>
				))}
			</div>
			<button className="py-1 px-0 ml-3" onClick={() => slide(+SCROLL_AMOUNT)}>
				<RightCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</button>
		</div>
	);
};

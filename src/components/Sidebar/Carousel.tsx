import { useEffect, useRef, useState } from 'react';
import { LeftCarouselIcon, RightCarouselIcon } from '../../assets/svg';

const SCROLL_AMOUNT = 100;

export const Carousel = () => {
	const scrollingDivRef = useRef<HTMLDivElement | null>(null);
	const [activeCarouselItem, setActiveCarouselItem] = useState('Stations');
	const [index, setIndex] = useState(2);
	const [carouselItems, setCarouselItems] = useState(['floors', 'Lines', 'Stations', 'parts', 'MoreItem1']);

	// useEffect(() => {
	// 	// Duplicate items at the beginning and end
	// 	const duplicatedItems = [...carouselItems, ...carouselItems, ...carouselItems];
	// 	setCarouselItems(duplicatedItems);
	// }, [carouselItems]);

	// scroll horizontally with the arrow is pressed
	const slide = (shift: number) => {
		console.log(shift);
		if (scrollingDivRef.current) {
			const container = scrollingDivRef.current;
			const scrollAmount = container.scrollLeft + shift;

			container.scrollTo({
				left: scrollAmount,
				behavior: 'smooth', // Add smooth scrolling behavior
			});
		}
	};

	// const carouselItems = ['floors', 'Lines', 'Stations', 'parts', 'MoreItem1'];
	console.log(carouselItems);

	return (
		<div className="flex w-full">
			<button
				className="py-1 px-0 mr-3 hover:bg-gray-200 flex-1 w-6 h-8"
				onClick={() => {
					if (index === 2) {
						setCarouselItems([...carouselItems, ...carouselItems]);
					}
					setIndex(index - 1);
					slide(-SCROLL_AMOUNT);
				}}
			>
				<LeftCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</button>
			<div className="flex bg-white overflow-auto no-scrollbar w-full" ref={scrollingDivRef}>
				{carouselItems.map((item, index) => (
					<span
						onClick={() => {
							setIndex(index);
							setActiveCarouselItem(item);
						}}
						key={`${item}-${index}`}
						className={`py-1 px-4 border border-primary text-sm uppercase cursor-pointer ${
							index % 2 === 1 ? 'border-r-0 border-l-0' : ''
						} ${item === activeCarouselItem ? 'font-bold bg-primary text-white' : 'font-light '}`}
					>
						{item}
					</span>
				))}
			</div>
			<button
				className="py-1 px-0 ml-3 hover:bg-gray-200 flex-1 w-6 h-8"
				onClick={() => {
					setIndex(index + 1);
					if (carouselItems.length - 1 === index) {
						setCarouselItems([...carouselItems, ...carouselItems]);
					}
					slide(+SCROLL_AMOUNT);
				}}
			>
				<RightCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</button>
		</div>
	);
};

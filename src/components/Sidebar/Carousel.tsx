import { useState } from 'react';
// import { LeftCarouselIcon, RightCarouselIcon } from '../../assets/svg';
import Carousel from 'react-multi-carousel';

// const SCROLL_AMOUNT = 50;

export const Slider = () => {
	// const scrollingDivRef = useRef<HTMLDivElement | null>(null);
	const [activeCarouselItem, setActiveCarouselItem] = useState('Stations');

	// scroll horizontally with the arrow is pressed
	// const slide = (shift: number) => {
	// 	if (scrollingDivRef.current) {
	// 		const container = scrollingDivRef.current;
	// 		const scrollAmount = container.scrollLeft + shift;

	// 		container.scrollTo({
	// 			left: scrollAmount,
	// 			behavior: 'smooth', // Add smooth scrolling behavior
	// 		});
	// 	}
	// };

	const carouselItems = ['floors', 'Lines', 'Stations', 'parts', 'MoreItem1'];
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div className="flex w-full">
			<Carousel
				className="flex bg-white overflow-auto no-scrollbar w-full"
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				ssr={true}
				infinite={true}
				autoPlay={false}
				keyBoardControl={true}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{carouselItems.map((item, index) => (
					<div
						onClick={() => setActiveCarouselItem(item)}
						key={`${item}-${index}`}
						className={`py-1 px-4 border border-primary text-sm uppercase cursor-pointer ${
							index % 2 === 1 ? 'border-r-0 border-l-0' : ''
						} ${item === activeCarouselItem ? 'font-bold bg-primary text-white' : 'font-light '}`}
					>
						{item}
					</div>
				))}
			</Carousel>

			{/* <button className="py-1 px-0 mr-3 hover:bg-gray-200 flex-1 w-6 h-8" onClick={() => slide(-SCROLL_AMOUNT)}>
				<LeftCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</button>
			<div className="flex bg-white overflow-auto no-scrollbar w-full" ref={scrollingDivRef}>
				{carouselItems.map((item, index) => (
					<span
						onClick={() => setActiveCarouselItem(item)}
						key={`${item}-${index}`}
						className={`py-1 px-4 border border-primary text-sm uppercase cursor-pointer ${index % 2 === 1 ? 'border-r-0 border-l-0' : ''
							} ${item === activeCarouselItem ? 'font-bold bg-primary text-white' : 'font-light '}`}
					>
						{item}
					</span>
				))}
			</div>
			<button className="py-1 px-0 ml-3 hover:bg-gray-200 flex-1 w-6 h-8" onClick={() => slide(+SCROLL_AMOUNT)}>
				<RightCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</button> */}
		</div>
	);
};

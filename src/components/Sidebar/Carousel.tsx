import { useState } from 'react';
import Carousel from 'react-multi-carousel';

export const Slider = () => {
	const [activeCarouselItem, setActiveCarouselItem] = useState('Stations');

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
				transitionDuration={1}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{carouselItems.map((item, index) => (
					<div
						onClick={() => setActiveCarouselItem(item)}
						key={`${item}-${index}`}
						className={`py-1 px-4 border border-primary text-sm uppercase cursor-pointer select-none ${
							index % 2 === 1 ? 'border-r-0 border-l-0' : ''
						} ${item === activeCarouselItem ? 'font-bold bg-primary text-white' : 'font-light '}`}
					>
						{item}
					</div>
				))}
			</Carousel>
		</div>
	);
};

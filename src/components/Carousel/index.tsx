import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CustomCarousel = () => {
	const carouselItems = ['floors', 'Lines', 'Stations', 'parts', 'MoreItem1'];

	return (
		<Carousel showArrows={true} showStatus={false} showIndicators={false} swipeable={true}>
			<div>
				{carouselItems.map((item, index) => (
					<span
						key={`${item}-${index}`}
						className={`py-1 px-4 border border-primary text-sm uppercase ${
							index % 2 === 1 ? 'border-r-0 border-l-0' : ''
						} ${item === 'Stations' ? 'font-bold bg-primary text-white' : 'font-light '}`}
					>
						{item}
					</span>
				))}
			</div>
			<div></div>
		</Carousel>
	);
};

export default CustomCarousel;

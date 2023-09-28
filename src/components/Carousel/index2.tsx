import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { LeftCarouselIcon, RightCarouselIcon } from '../../assets/svg';

const PureSlider = () => {
	const carouselItems = ['floors', 'Lines', 'Stations', 'parts', 'MoreItem1'];

	return (
		<CarouselProvider className="flex flex-row" naturalSlideWidth={10} naturalSlideHeight={12} totalSlides={3}>
			<ButtonBack className="py-1 px-0 mr-3">
				<LeftCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</ButtonBack>
			<Slider>
				{carouselItems.map((item, index) => (
					<Slide
						index={index}
						className={`py-1 px-4 border border-primary text-sm uppercase ${
							index % 2 === 1 ? 'border-r-0 border-l-0' : ''
						} ${item === 'Stations' ? 'font-bold bg-primary text-white' : 'font-light '}`} // imitating selected
					>
						{item}
					</Slide>
				))}
				{/* <Slide index={0}>I am the first Slide.</Slide>
				<Slide index={1}>I am the second Slide.</Slide>
				<Slide index={2}>I am the third Slide.</Slide> */}
			</Slider>
			<ButtonNext className="py-1 px-0 ml-3">
				<RightCarouselIcon className="hover:stroke-primary hover:opacity-100" />
			</ButtonNext>
		</CarouselProvider>
	);
};

export default PureSlider;

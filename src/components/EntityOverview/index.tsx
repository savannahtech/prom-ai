import { Img, Text } from '..';

type EntityProps = {
	title: string;
	src: string;
	value: number;
};

export const EntityOverview = (props: EntityProps) => {
	return (
		<div className="flex flex-col justify-start">
			<div className="flex flex-row items-start">
				<Img
					className="h-4 w-4 -ml-[4px]"
					src={props.src} // images/img_trash.svg
					alt="trash"
				/>
				<Text className="text-gray-700 text-xs tracking-[0.40px]" size="txtLatoRegular12">
					{props.title}
				</Text>
			</div>
			<Text className="ml-0.5 md:ml-[0] mt-1 text-gray-900 text-xl tracking-[0.40px]" size="txtLatoBold20">
				{props.value}
			</Text>
		</div>
	);
};

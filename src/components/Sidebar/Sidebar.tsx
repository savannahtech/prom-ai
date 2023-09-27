import { Text } from '..';
import {
	GridIcon,
	LetterIcon,
	ListIcon,
	NumberIcon,
	SearchIcon,
	StationIcon,
	StorageIcon,
	WorkshopIcon,
} from '../../assets/svg';
import DragItem from '../DragItem';
import { Carousel } from './Carousel';

export const Sidebar = () => {
	return (
		<div className="bg-white h-full overflow-y-auto">
			<div className="flex flex-col gap-4 p-4">
				<div className="flex sm:flex-row flex-col gap-2 items-start justify-start">
					<Text className="border border-[#546E7A] rounded-sm border-solid p-1 text-sm" size="txtLatoRegular14Gray900">
						MAZOR_Surgical Arm
					</Text>
					<Text className="border border-[#546E7A]  rounded-sm border-solid p-1 text-sm" size="txtLatoRegular14Gray900">
						Floor 1
					</Text>
					<Text
						className="bg-pink-300 justify-center p-1 rounded-sm text-white text-sm"
						size="txtLatoRegular16"
						style={{ backgroundColor: '#F06292' }}
					>
						Line 1
					</Text>
				</div>

				<Carousel />

				<div className="flex flex-row border border-solid border-primary  mt-2 cursor-pointer rounded-r-sm rounded-l-sm">
					<input placeholder="Input Search text" type="text" className="py-1 w-full px-4" />
					<div className="flex justify-center items-center py-0.5 px-1 border-primary border-l">
						<SearchIcon />
					</div>
				</div>

				<div className="flex flex-row justify-between mt-3">
					<div className="flex flex-row">
						<NumberIcon />
						<LetterIcon />
					</div>
					<div className="flex flex-row">
						<GridIcon />
						<ListIcon />
					</div>
				</div>

				<DragItem className="mt-3 flex flex-row hover:bg-slate-100">
					<StationIcon />
					<Text className="ml-1">New Station</Text>
				</DragItem>
				<DragItem className="flex flex-row hover:bg-slate-100">
					<StorageIcon />
					<Text>Storage</Text>
				</DragItem>
				<DragItem className="flex flex-row hover:bg-slate-100">
					<WorkshopIcon />
					<Text>Workshop</Text>
				</DragItem>
			</div>
		</div>
	);
};

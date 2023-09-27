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
import Text from '../Text';

export const Sidebar = () => {
	return (
		<div className="bg-white h-full overflow-y-auto">
			<div className="flex flex-col gap-2 p-4">
				<div className="flex sm:flex-row flex-col gap-2 items-start justify-start">
					<Text className="border border-solid p-1 text-xs" size="txtLatoRegular14Gray900">
						MAZOR_Surgical Arm
					</Text>
					<Text className="border border-solid p-1 text-xs" size="txtLatoRegular14Gray900">
						Floor 1
					</Text>
					<Text
						className="bg-pink-300 justify-center p-1 rounded-sm text-base text-white text-xs"
						size="txtLatoRegular16"
						style={{ backgroundColor: '#F06292' }}
					>
						Line 1
					</Text>
				</div>

				<div className="flex flex-row border border-solid mt-2 cursor-pointer">
					<input placeholder="Input Search text" type="text" className="p-0.5 w-full pl-2" />
					<div className="flex justify-center items-center py-0.5 px-1 border border-left">
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

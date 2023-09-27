import { Droppable } from 'react-beautiful-dnd';
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
import { useUserContext } from '../../context/AppContext';

interface SidebarProps {
	useDragHandle: boolean;
	onItemClick: () => void;
}

export const Sidebar = ({ useDragHandle, onItemClick }: SidebarProps) => {
	const { appState } = useUserContext();

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

				<Droppable droppableId={appState.columns['left'].id} isDropDisabled={true} type="left">
					{(provided, snapshot) => {
						return (
							<div
								className={snapshot.isDraggingOver ? 'TaskListDragging' : 'TaskList'}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{appState.columns['left']?.taskIds
									.map((_el) => {
										switch (_el) {
											case 'new-station':
												return {
													id: 'new-station',
													name: 'New Station',
													icon: <StationIcon />,
												};
											case 'storage':
												return {
													id: 'storage',
													name: 'Storage',
													icon: <StorageIcon />,
												};
											case 'workshop':
												return {
													id: 'workshop',
													name: 'Workshop',
													icon: <WorkshopIcon />,
												};

											default:
												break;
										}
									})
									.map((el, index) => (
										<DragItem
											key={index}
											draggableId={el?.id}
											index={index}
											className="mt-3 flex flex-row hover:bg-slate-100"
											useDragHandle={useDragHandle}
											onClick={onItemClick}
										>
											{el?.icon}
											<Text className="ml-1">{el?.name}</Text>
										</DragItem>
									))}
								{provided.placeholder}
							</div>
						);
					}}
				</Droppable>
			</div>
		</div>
	);
};

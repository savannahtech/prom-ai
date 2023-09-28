import { Droppable } from 'react-beautiful-dnd';
import { Button, Text } from '..';
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
import { Slider } from './Carousel';
import { useUserContext } from '../../context/AppContext';
import { ApplicationData, ColumnnData } from '../../initialData';

interface SidebarProps {
	useDragHandle?: boolean;
	onItemClick: () => void;
}

export const Sidebar = ({ onItemClick }: SidebarProps) => {
	const { appState, setItems } = useUserContext();

	const sortList = (type: string) => {
		const taskList = [...appState.columns['left'].taskIds];

		let sortedList: string[] = [];
		if (type === 'letters') sortedList = taskList.sort((a, b) => b.localeCompare(a));
		else sortedList = taskList.sort((a, b) => a.localeCompare(b));

		const newColumn: ColumnnData = {
			...appState.columns['left'],
			taskIds: sortedList,
		};

		const newState: ApplicationData = {
			...appState,
			columns: {
				...appState.columns,
				left: newColumn,
			},
		};

		setItems(newState);
	};

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

				<Slider />

				<div className="flex flex-row border border-solid border-primary  mt-2 cursor-pointer rounded-r-sm rounded-l-sm">
					<input placeholder="input search text" type="text" className="py-1 w-full px-4" />
					<div className="flex justify-center items-center py-0.5 px-1 border-primary border-l outline-none">
						<Button title="search" className="p-0">
							<SearchIcon />
						</Button>
					</div>
				</div>

				<div className="flex flex-row justify-between mt-3">
					<div className="flex flex-row">
						<Button
							title="ASC"
							className="p-0 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
							onClick={() => sortList('letters')}
						>
							<NumberIcon />
						</Button>
						<Button
							title="DSC"
							className="p-0 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
							onClick={() => sortList('number')}
						>
							<LetterIcon />
						</Button>
					</div>
					<div className="flex flex-row">
						<Button
							title="Grid"
							className="p-0 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
						>
							<GridIcon />
						</Button>
						<Button
							title="List"
							className="p-0 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
						>
							<ListIcon />
						</Button>
					</div>
				</div>

				<Droppable droppableId={'left'}>
					{(provided, snapshot) => {
						return (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className={snapshot.isDraggingOver ? 'bg-mainBg border p-1 rounded-lg' : ''}
							>
								{appState.columns['left'].taskIds.map((_el, index) => {
									switch (_el) {
										case 'new-station':
											return (
												<div key={_el} className={snapshot.isDraggingOver ? 'bg-mainBg border p-1 rounded-lg' : ''}>
													<DragItem
														draggableId={'new-station'}
														index={index}
														className="mt-3 flex flex-row hover:bg-slate-100"
														onClick={onItemClick}
													>
														<StationIcon />
														<Text className="ml-1">New Station</Text>
													</DragItem>
												</div>
											);
										case 'storage':
											return (
												<div key={_el} className={snapshot.isDraggingOver ? 'bg-mainBg border p-1 rounded-lg' : ''}>
													<DragItem
														draggableId={'storage'}
														index={index}
														className="mt-3 flex flex-row hover:bg-slate-100"
														onClick={onItemClick}
													>
														<StorageIcon />
														<Text className="ml-1">Storage</Text>
													</DragItem>
												</div>
											);
										case 'workshop':
											return (
												<div key={_el} className={snapshot.isDraggingOver ? 'bg-mainBg border p-1 rounded-lg' : ''}>
													<DragItem
														draggableId={'workshop'}
														index={index}
														className="mt-3 flex flex-row hover:bg-slate-100"
														onClick={onItemClick}
													>
														<WorkshopIcon />
														<Text className="ml-1">Workshop</Text>
													</DragItem>
												</div>
											);
										default:
											return <div className={snapshot.isDraggingOver ? 'bg-mainBg border p-1 rounded-lg' : ''} />;
									}
								})}
								{!appState.columns['left']?.taskIds.length && <div className={'bg-mainBg p-1 rounded-lg h-20'} />}
								{provided.placeholder}
							</div>
						);
					}}
				</Droppable>
			</div>
		</div>
	);
};

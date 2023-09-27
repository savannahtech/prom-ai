import { Droppable } from 'react-beautiful-dnd';
import { Button, Text } from '..';
import { useUserContext } from '../../context/AppContext';
import { StationIcon, StorageIcon, WorkshopIcon } from '../../assets/svg';
import DragItem from '../DragItem';

export const MainDropzone = () => {
	const { appState } = useUserContext();

	return (
		<div className="bg-white h-full p-4 rounded-lg">
			<div className="bg-white-A700 flex flex-col gap-8 items-start justify-start">
				<Button
					className="bg-transparent cursor-pointer font-medium leading-[normal] min-w-[83px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 tracking-[0.40px]"
					size="xs"
				>
					Line 1
				</Button>

				<div className="bg-white-A700 flex flex-col items-center justify-center rounded shadow-bs w-[210px] border border-blue_gray-100">
					<div
						className="bg-cover bg-no-repeat flex flex-col h-auto md:h-[210px] w-[210px] items-center justify-center rounded"
						style={{ backgroundImage: "url('images/img_frame592.svg')" }}
					>
						<Droppable droppableId={'dropzone'}>
							{(provided, snapshot) => {
								return (
									<div
										className={`${
											snapshot.isDraggingOver ? 'bg-opacity-60 bg-mainBg h-full p-1 w-[98%]' : 'w-full'
										} p-1`}
									>
										<div className="" ref={provided.innerRef} {...provided.droppableProps}>
											<div className="flex flex-col items-center justify-center w-auto h-full">
												{appState.columns['dropzone']?.taskIds.length > 0 ? (
													appState.columns['dropzone']?.taskIds
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
																	return {
																		id: 'new-station',
																		name: 'New Station',
																		icon: <StationIcon />,
																	};
															}
														})
														.map((el, index) => (
															<DragItem
																key={el.id}
																draggableId={el.id}
																index={index}
																className="mt-3 flex flex-row hover:bg-slate-100"
																isDragDisabled={true}
																onClick={() => {}}
															>
																{el.icon}
																<Text className="ml-1">{el.name}</Text>
															</DragItem>
														))
												) : snapshot.isDraggingOver ? null : (
													<div>
														<Text
															className="text-center text-gray-700 text-sm tracking-[0.46px] w-auto"
															size="txtLatoRegular14"
														>
															Drag Station
														</Text>
													</div>
												)}
											</div>
										</div>
										{provided.placeholder}
									</div>
								);
							}}
						</Droppable>
					</div>
				</div>
			</div>
		</div>
	);
};

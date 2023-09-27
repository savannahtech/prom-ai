import { Droppable } from "react-beautiful-dnd";
import { Button, Text } from "..";
// import PlannerAddNewStationDargdrop from "../PlannerAddNewStationDargdrop";

// interface DropZonebarProps {
// 	useDragHandle: boolean
// 	onItemClick: () => void;
// }

export const MainDropzone = () => {
	return <div className="bg-white h-full p-4 rounded-lg">
		<div className="bg-white-A700 flex flex-col gap-8 items-start justify-start">
			<Button
				className="bg-transparent cursor-pointer font-medium leading-[normal] min-w-[83px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 tracking-[0.40px]"
				size="xs"
			>
				Line 1
			</Button>

			<div className="bg-white-A700 flex flex-col items-center justify-center mb-[531px] rounded shadow-bs w-[210px] border border-blue_gray-100">
				<div
					className="bg-cover bg-no-repeat flex flex-col h-auto md:h-[210px] w-[210px] items-center justify-center rounded"
					style={{ backgroundImage: "url('images/img_frame592.svg')" }}
				>
					<Droppable
						droppableId="right"
						isDropDisabled={true}
						type="right"
					>
						{(provided, snapshot) => {
							return (
								<div
									className={
										snapshot.isDraggingOver ? "TaskListDragging" : "TaskList"
									}
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									<div className="flex flex-col items-center justify-center w-auto">
										<Text
											className="text-center text-gray-700 text-sm tracking-[0.46px] w-auto"
											size="txtLatoRegular14"
										>
											Drag Station
										</Text>
									</div>
									{provided.placeholder}
								</div>
							);
						}}
					</Droppable>

				</div>
			</div>

			{/* <PlannerAddNewStationDargdrop className="bg-white-A700 flex flex-col items-center justify-center mb-[531px] rounded shadow-bs w-[210px] border border-blue_gray-100" /> */}
		</div>
	</div>;
};

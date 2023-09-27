import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Navbar, Sidebar } from '../components'; // MainDropzone

import { ApplicationData, ColumnnData } from '../initialData';
import { useUserContext } from '../context/AppContext';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { appState, setItems } = useUserContext();
	const [useDragHandle, setUseDragHandle] = useState<boolean>(false);

	const onDragEnd = (result: DropResult) => {
		const { source, draggableId } = result;
		// if (!destination) return;

		const final = appState.columns[source.droppableId].taskIds;
		const filteredSource = final.filter((el) => el !== draggableId);

		const newColumn: ColumnnData = {
			...appState.columns[source.droppableId],
			taskIds: filteredSource,
		};

		const destinationKey = source.droppableId === 'left' ? 'dropzone' : 'left';

		const newState: ApplicationData = {
			...appState,
			columns: {
				...appState.columns,
				[source.droppableId]: newColumn,
				[destinationKey]: {
					...appState.columns[destinationKey],
					taskIds: [...appState.columns[destinationKey].taskIds, draggableId],
				},
			},
		};

		setItems(newState);
	};

	const handleOnClick = () => {
		setUseDragHandle(!useDragHandle);
	};

	return (
		<div className="h-screen overflow-hidden">
			<Navbar />
			<div className="flex flex-1 h-full">
				<DragDropContext onDragEnd={onDragEnd}>
					<aside className="w-1/4">
						<Sidebar useDragHandle={useDragHandle} onItemClick={handleOnClick} />
					</aside>
					<main className="w-3/4 bg-mainBg p-4 overflow-y-auto">{children}</main>
				</DragDropContext>
			</div>
		</div>
	);
};

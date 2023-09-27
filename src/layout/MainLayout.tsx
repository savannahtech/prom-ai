import { useState } from 'react'
import { BeforeCapture, DragDropContext, DropResult } from 'react-beautiful-dnd';
import { MainDropzone, Navbar, Sidebar } from '../components'; // MainDropzone

import { ApplicationData, ColumnnData, cloneTask } from '../initialData';
import { useUserContext } from '../context/AppContext';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { appState, setItems } = useUserContext();
	const [useDragHandle, setUseDragHandle] = useState<boolean>(false);

	const onDragEnd = (result: DropResult) => {
		console.log('results:', result, 'current App State:', appState);

		const { destination, source, draggableId } = result;

		if (!destination) {
			if (
				source.droppableId === "left"
			) {
				const final: ColumnnData = appState.columns[source.droppableId];
				const newTaskIds = Array.from(final.taskIds);
				newTaskIds.pop();
				const newColumn: ColumnnData = {
					...final,
					taskIds: newTaskIds
				};
				const newState: ApplicationData = {
					...appState,
					columns: {
						...appState.columns,
						[newColumn.id]: newColumn
					}
				};
				setItems(newState);
			}
			return;
		}
		// the user dropped it at the same spot
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const start: ColumnnData = appState.columns[source.droppableId];
		const finish: ColumnnData = appState.columns[destination.droppableId];

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds);
			// // remove the task
			newTaskIds.splice(source.index, 1);
			// insert the task to destination
			newTaskIds.splice(destination.index, 0, draggableId);
			const newColumn: ColumnnData = {
				...start,
				taskIds: newTaskIds
			};

			const newState: ApplicationData = {
				...appState,
				columns: {
					...appState.columns,
					[newColumn.id]: newColumn
				}
			};
			setItems(newState);
		} else {
			const startTaskIds = Array.from(start.taskIds);
			startTaskIds.splice(source.index, 1);
			const newStart: ColumnnData = {
				...start,
				taskIds: startTaskIds
			};

			const finishTaskIds = Array.from(finish.taskIds);
			const newTaskId = [draggableId, "dropped"].join("/");
			finishTaskIds.splice(destination.index, 0, newTaskId);
			const newFinish: ColumnnData = {
				...finish,
				taskIds: finishTaskIds
			};

			const newState: ApplicationData = {
				...appState,
				columns: {
					...appState.columns,
					[newStart.id]: newStart,
					[newFinish.id]: newFinish
				}
			};
			setItems(newState);
		}
	};

	const onBeforeCapture = (before: BeforeCapture) => {
		console.log('before.draggableId:', before)

		if (before.draggableId.split("/")[2] === "dropped") {
			return;
		}

		const clonedTask = cloneTask(before.draggableId);

		if ([clonedTask.type, clonedTask.id].includes("left")) {
			const tasks = Array.from(appState.columns["left"].taskIds);
			tasks.push(clonedTask.id);

			const newState: ApplicationData = {
				...appState,
				columns: {
					...appState.columns,
					"left": {
						id: "left",
						title: "Left",
						taskIds: tasks
					}
				}
			};
			setItems(newState);
		} else {
			const tasks = Array.from(appState.columns["dropzone"].taskIds);
			tasks.push(clonedTask.id);
			const newState: ApplicationData = {
				...appState,
				columns: {
					...appState.columns,
					"dropzone": {
						id: "dropzone",
						title: "Dropzone",
						taskIds: tasks
					}
				}
			};
			setItems(newState);
		}
	};

	const handleOnClick = () => {
		setUseDragHandle(!useDragHandle);
	};

	return (
		<div className="h-screen overflow-hidden">
			<Navbar />
			<div className="flex flex-1 h-full">
				<DragDropContext onDragEnd={onDragEnd} onBeforeCapture={onBeforeCapture}>
					<aside className="w-1/4">
						<Sidebar useDragHandle={useDragHandle} onItemClick={handleOnClick} />
					</aside>
					<main className="w-3/4 bg-mainBg p-4 overflow-y-auto">
						{children}
						{/* <MainDropzone useDragHandle={useDragHandle} onItemClick={handleOnClick} /> */}
					</main>
				</DragDropContext>
			</div>
		</div>
	);
};

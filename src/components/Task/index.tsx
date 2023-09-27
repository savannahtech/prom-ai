import { Draggable } from 'react-beautiful-dnd';
import { TaskData } from '../../initialData';

export interface TaskProps {
	task: TaskData;
	index: number;
	useDragHandle: boolean;
}

export const Task = ({ task, index, useDragHandle }: TaskProps) => {
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided, snapshot) => (
				<div
					className={snapshot.isDragging ? 'TaskDragging' : 'Task'}
					{...provided.draggableProps}
					{...(useDragHandle ? {} : provided.dragHandleProps)}
					ref={provided.innerRef}
				>
					{useDragHandle ? <div className="Handle" {...provided.dragHandleProps} /> : null}
					{task.content}
					<input className="Input" />
				</div>
			)}
		</Draggable>
	);
};

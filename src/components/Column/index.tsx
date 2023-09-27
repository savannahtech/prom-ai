import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { ColumnnData, TaskType } from '../../initialData';

export interface ColumnProps {
	children: React.ReactNode;
	column: ColumnnData;
	isDropDisabled?: boolean;
	type?: TaskType;
}

export const Column = ({ children, column, isDropDisabled, type }: ColumnProps) => {
	return (
		<div className="Column">
			<Droppable droppableId={column.id} isDropDisabled={isDropDisabled || false} type={type}>
				{(provided: DroppableProvided, snapshot) => {
					return (
						<div
							className={snapshot.isDraggingOver ? 'TaskListDragging' : 'TaskList'}
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{children}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

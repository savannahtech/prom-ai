import { Draggable } from "react-beautiful-dnd";

export type DragItemProps = Partial<{
	className: string;
	as: React.ElementType;
	index: number;
	draggableId: string;
	useDragHandle: boolean;
}> &
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const DragItem: React.FC<React.PropsWithChildren<DragItemProps>> = ({ children, className = '', as, draggableId, index, useDragHandle, ...restProps }) => {
	const Component = as || 'div';

	return (
		<Draggable draggableId={draggableId || ''} index={index || 0}>
			{(provided, snapshot) => (
				<div
					className={snapshot.isDragging ? "TaskDragging" : "Task"}
					{...provided.draggableProps}
					{...(useDragHandle ? {} : provided.dragHandleProps)}
					ref={provided.innerRef}
				>
					<Component className={`border border-blue-400 border-solid rounded p-3 cursor-pointer ${className}`} {...restProps}>
						{children}
					</Component>

				</div>
			)}
		</Draggable>
	);
};

export default DragItem;

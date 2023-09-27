import { Draggable } from 'react-beautiful-dnd';

export type DragItemProps = Partial<{
	className: string;
	as: React.ElementType;
	index: number;
	draggableId: string;
	useDragHandle?: boolean;
	isDragDisabled?: boolean;
}> &
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
const DragItem: React.FC<React.PropsWithChildren<DragItemProps>> = ({
	children,
	className = '',
	as,
	draggableId,
	index,
	isDragDisabled,
	...restProps
}) => {
	const Component = as || 'div';

	return (
		<Draggable draggableId={draggableId || ''} index={index || 0} isDragDisabled={isDragDisabled}>
			{(provided, snapshot) => (
				<div className={'w-full'} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					<Component
						className={`border border-primary border-solid rounded-lg p-4 cursor-pointer ${
							snapshot.isDragging ? 'bg-white z-10 rotate-2' : 'w-full'
						} ${className}`}
						{...restProps}
					>
						{children}
					</Component>
				</div>
			)}
		</Draggable>
	);
};

export default DragItem;

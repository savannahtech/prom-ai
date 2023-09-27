export type DragItemProps = Partial<{
	className: string;
	as: React.ElementType;
}> &
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const DragItem: React.FC<React.PropsWithChildren<DragItemProps>> = ({ children, className = '', as, ...restProps }) => {
	const Component = as || 'div';

	return (
		<Component className={`border border-blue-400 border-solid rounded p-3 cursor-pointer ${className}`} {...restProps}>
			{children}
		</Component>
	);
};

export default DragItem;

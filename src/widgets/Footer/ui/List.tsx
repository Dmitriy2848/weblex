import { ElementType, FC, HTMLAttributes, ReactElement } from 'react';

export interface IListProps extends HTMLAttributes<HTMLOrSVGElement> {
	heading: string;
	items: { href: string; element: ReactElement | string }[];
	type: 'column' | 'table';
	as?: ElementType;
	alignItems?: 'start' | 'center' | 'end';
	textAlign?: 'left' | 'right';
}

const List: FC<IListProps> = ({
	heading,
	items,
	type,
	as: Tag = 'a',
	alignItems = 'start',
	textAlign = 'left'
}) => {
	const alignItemsVariants = {
		start: 'items-start',
		center: 'items-center',
		end: 'items-start lg:items-end'
	};
	const textAlignVariants = {
		left: 'text-left',
		right: 'text-left lg:text-right'
	};
	const typeVariants = {
		column: `flex flex-col gap-y-[10px] ${alignItemsVariants[alignItems]}`,
		table: 'grid grid-cols-2 gap-x-[52px] gap-y-[10px]'
	};

	return (
		<div className='w-fit'>
			<h5
				className={`${textAlignVariants[textAlign]} uppercase text-[14px] leading-[16px] text-zinc-500 font-bold tracking-wide`}
			>
				{heading}
			</h5>
			<nav className={`${typeVariants[type]} text-slate-200 mt-[20px] w-fit`}>
				{items.map((item, i) => (
					<Tag
						key={i}
						href={item.href}
						className='block text-slate-200 block text-[14px] leading-[16px] w-fit'
					>
						{item.element}
					</Tag>
				))}
			</nav>
		</div>
	);
};

export default List;

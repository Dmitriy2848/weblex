import { ElementType, FC, HTMLAttributes, ReactElement } from 'react';

export interface IListProps extends HTMLAttributes<HTMLOrSVGElement> {
	heading: string;
	items: { href: string; element: ReactElement | string }[];
	type: 'column' | 'table';
	as?: ElementType;
	align?: 'start' | 'center' | 'end';
}

const List: FC<IListProps> = ({
	heading,
	items,
	type,
	as: Tag = 'a',
	align = 'start'
}) => {
	const alignVariants = {
		start: 'items-start',
		center: 'items-center',
		end: 'items-end'
	};
	const typeVariants = {
		column: `flex flex-col gap-y-[10px] ${alignVariants[align]}`,
		table: 'grid grid-cols-2 gap-x-[52px] gap-y-[10px]'
	};

	return (
		<div>
			<h5 className='uppercase text-[14px] leading-[16px] text-zinc-500 font-bold tracking-wide'>
				{heading}
			</h5>
			<nav className={`${typeVariants[type]} text-slate-200 mt-[20px]`}>
				{items.map((item, i) => (
					<Tag
						key={i}
						href={item.href}
						className='block text-slate-200 block text-[14px] leading-[16px]'
					>
						{item.element}
					</Tag>
				))}
			</nav>
		</div>
	);
};

export default List;

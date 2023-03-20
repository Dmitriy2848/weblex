import { FC } from 'react';

interface ILightProps {
	x: number;
	y: number;
	bg: 'purple' | 'red';
}

const Light: FC<ILightProps> = ({ x, y, bg }) => {
	const lightVariants = {
		purple: 'bg-violet-700',
		red: 'bg-red-500'
	};

	return (
		<span
			style={{ top: `${y}%`, left: `${x}%` }}
			className={`${lightVariants[bg]} w-[260px] h-[260px] blur-[196px] fixed -translate-x-[50%] -translate-y-[50%] -z-10`}
		></span>
	);
};

export default Light;

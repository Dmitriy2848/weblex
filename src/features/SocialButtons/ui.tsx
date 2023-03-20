import { FC, ReactElement } from 'react';

import { ReactComponent as Telegram } from 'shared/assets/telegram.svg';
import { ReactComponent as Telephone } from 'shared/assets/telephone.svg';
import { ReactComponent as WhatsApp } from 'shared/assets/whatsapp.svg';

interface IButtonProps {
	href: string;
	children: ReactElement;
}
interface ISocialButtonsProps {
	gap?: 'sm' | 'base';
}

const list: IButtonProps[] = [
	{
		href: '/',
		children: <Telegram />
	},
	{
		href: '/',
		children: <Telephone />
	},
	{
		href: '/',
		children: <WhatsApp />
	}
];

const Button: FC<IButtonProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			className='inline-block'
		>
			{children}
		</a>
	);
};

const SocialButtons: FC<ISocialButtonsProps> = ({ gap = 'base' }) => {
	const gapVariants = {
		sm: 'gap-[10px]',
		base: 'gap-[30px]'
	};
	return (
		<div className={`${gapVariants[gap]} flex h-fit`}>
			{list.map((item, i) => (
				<Button
					href={item.href}
					key={i}
				>
					{item.children}
				</Button>
			))}
		</div>
	);
};

export default SocialButtons;

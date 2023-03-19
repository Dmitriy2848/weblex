import { FC } from 'react';

import SocialButtons from 'features/SocialButtons';

import PhoneNumber from 'entities/PhoneNumber';

import { ReactComponent as Logo } from 'shared/assets/logo.svg';

// todo типизируй
const routes = [
	{
		href: '/',
		text: 'Услуги'
	},
	{
		href: '/',
		text: 'Виджеты'
	},
	{
		href: '/',
		text: 'Интеграции'
	},
	{
		href: '/',
		text: 'Кейсы'
	},
	{
		href: '/',
		text: 'Сертификаты'
	}
];

interface INavLinkProps {
	href: string;
	children: string;
}

const NavLink: FC<INavLinkProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			className='text-[16px] text-slate-200 leading-[19px]'
		>
			{children}
		</a>
	);
};

const Header: FC = () => {
	return (
		<div className='mx-[10%] mt-[46px] flex justify-between'>
			<div>
				<a href='/'>
					<span className='block mb-[10px]'>
						<Logo />
					</span>
					<span className='block text-[10px] text-slate-200 max-w-[130px]'>
						крупный интегратор CRM в России и ещё в странах
					</span>
				</a>
			</div>

			<nav className='flex gap-[30px] h-fit'>
				{routes.map((route, i) => (
					<NavLink
						key={i}
						href={route.href}
					>
						{route.text}
					</NavLink>
				))}
			</nav>

			<PhoneNumber />
			<SocialButtons />
		</div>
	);
};

export default Header;

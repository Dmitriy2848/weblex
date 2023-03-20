import { FC } from 'react';

import SocialButtons from 'features/SocialButtons';

import PhoneNumber from 'entities/PhoneNumber';

import { ReactComponent as Logo } from 'shared/assets/logo.svg';

interface INavLinkProps {
	href: string;
	children: string;
}

const routes: INavLinkProps[] = [
	{
		href: '/',
		children: 'Услуги'
	},
	{
		href: '/',
		children: 'Виджеты'
	},
	{
		href: '/',
		children: 'Интеграции'
	},
	{
		href: '/',
		children: 'Кейсы'
	},
	{
		href: '/',
		children: 'Сертификаты'
	}
];

const NavLink: FC<INavLinkProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			className='uppercase text-[12px] leading-[15px] md:capitalize md:text-[16px] text-slate-200 md:leading-[19px]'
		>
			{children}
		</a>
	);
};

const Header: FC = () => {
	return (
		<div className='px-[10px] md:px-[5%] xl:px-[10%] md:mt-[46px] py-[15px] flex justify-between bg-[#0E1014] md:bg-transparent'>
			<div className='hidden md:block'>
				<a href='/'>
					<span className='block mb-[10px]'>
						<Logo />
					</span>
					<span className='block text-[10px] text-slate-200 max-w-[130px]'>
						крупный интегратор CRM в России и ещё в странах
					</span>
				</a>
			</div>

			<nav className='flex gap-[5px] md:gap-[30px] h-fit justify-between lg:w-fit w-full'>
				{routes.map((route, i) => (
					<NavLink
						key={i}
						href={route.href}
					>
						{route.children}
					</NavLink>
				))}
			</nav>

			<div className='flex-row gap-[20px] xl:gap-[40px] h-fit hidden lg:flex'>
				<PhoneNumber />
				<SocialButtons />
			</div>
		</div>
	);
};

export default Header;

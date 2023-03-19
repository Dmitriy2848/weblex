import { FC } from 'react';

import List, { IListProps } from 'widgets/Footer/ui/List';

import SocialButtons from 'features/SocialButtons';

const content: IListProps[] = [
	{
		type: 'column',
		heading: 'О компании',
		items: [
			{
				href: '/',
				element: 'Партнерская программа'
			},
			{
				href: '/',
				element: 'Вакансии'
			}
		]
	},
	{
		type: 'table',
		heading: 'Меню',
		items: [
			{
				href: '/',
				element: 'Расчет стоимости'
			},
			{
				href: '/',
				element: 'Кейсы'
			},
			{
				href: '/',
				element: 'Услуги'
			},
			{
				href: '/',
				element: 'Благодарственные письма'
			},
			{
				href: '/',
				element: 'Виждеты'
			},
			{
				href: '/',
				element: 'Сертификаты'
			},

			{
				href: '/',
				element: 'Интеграции'
			},
			{
				href: '/',
				element: 'Блок на YouTube'
			},
			{
				href: '/',
				element: 'Наши клиенты'
			},

			{
				href: '/',
				element: 'Вопрос / Ответ'
			}
		]
	},
	{
		type: 'column',
		as: 'span',
		align: 'end',
		heading: 'Контакты',
		items: [
			{
				href: '/',
				element: '+7 555 555-55-55'
			},
			{
				href: '/',
				element: <SocialButtons gap='sm' />
			},
			{
				href: '/',
				element: 'Москва, Путевой проезд 3с1, к 902'
			}
		]
	}
];

const Footer: FC = () => {
	return (
		<footer className='mx-[10%] mt-[55px]'>
			<div className='w-full flex justify-between '>
				{content.map((el, i) => (
					<List
						key={i}
						heading={el.heading}
						items={el.items}
						type={el.type}
						as={el.as}
						align={el.align}
					/>
				))}
			</div>
			<div className='flex flex-col items-end text-[12px] leading-[14px] font-light text-slate-200 mt-[33px]'>
				<span>©WELBEX 2022. Все права защищены.</span>
				<a
					href='/'
					className='underline block mt-[5px]'
				>
					Политика конфиденциальности
				</a>
			</div>
		</footer>
	);
};

export default Footer;

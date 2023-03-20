import { FC } from 'react';

const presents = [
	{ heading: 'Виджеты', text: '30 готовых решений' },
	{ heading: 'Dashboard', text: 'с показателями вашего бизнеса' },
	{ heading: 'Skype Аудит', text: 'отдела продаж и CRM системы' },
	{ heading: '35 дней', text: 'использования CRM' }
];

const Content: FC = () => {
	return (
		<main className='pt-[90px] px-[10px] md:px-[5%] lg:px-[10%] pb-[70px] flex flex-col md:flex-row items-center md:items-start justify-between'>
			<div className='w-full md:max-w-[275px]'>
				<h1 className='text-slate-200 text-[36px] leading-[44px] md:text-[48px] md:leading-[58px] max-w-[365px]'>
					Зарабатывайте больше
					<br />
					<span className='font-black bg-clip-text bg-gradient-to-r text-transparent from-amber-300 to-red-500'>
						с WEBLEX
					</span>
				</h1>
				<span className='inline-block mt-[30px] text-[18px] leading-[22px] text-slate-200 font-light'>
					Развиваем и контролируем продажи за вас
				</span>
			</div>
			<div className='text-left md:text-right text-slate-200 w-full md:max-w-[275px] mt-[45px] md:mt-0'>
				<h5>
					Вместе с{' '}
					<span className='uppercase text-[18px] leading-[22px] font-bold bg-clip-text bg-gradient-to-r text-transparent from-amber-300 to-red-500'>
						бесплатной <br />
						консультацией
					</span>{' '}
					мы дарим:
				</h5>
				<div className='grid grid-cols-2 gap-[30px] mt-[40px]'>
					{presents.map((present, i) => (
						<div key={i}>
							<h4 className='uppercase font-medium text-[18px] leading-[22px]'>
								{present.heading}
							</h4>
							<span className='inline-block text-[16px] leading-[20px] font-light max-w-[150px]'>
								{present.text}
							</span>
						</div>
					))}
				</div>
				<button className='mt-[61px] py-[21px] px-[34px] bg-blue-500 text-[16px] leading-[20px]'>
					Получить консультацию
				</button>
			</div>
		</main>
	);
};

export default Content;

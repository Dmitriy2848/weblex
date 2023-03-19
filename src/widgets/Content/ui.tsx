import { FC } from 'react';

const presents = [
	{ heading: 'Виджеты', text: '30 готовых решений' },
	{ heading: 'Dashboard', text: 'с показателями вашего бизнеса' },
	{ heading: 'Skype Аудит', text: 'отдела продаж и CRM системы' },
	{ heading: '35 дней', text: 'использования CRM' }
];
// todo замени на падинги

const Content: FC = () => {
	return (
		<main className='mt-[90px] mx-[10%] mb-[70px] flex justify-between'>
			<div>
				<h1 className='text-slate-200 text-[48px] leading-[58px] max-w-[365px]'>
					Зарабатывай больше
					<br />
					<span className='font-black bg-clip-text bg-gradient-to-r text-transparent from-amber-300 to-red-500'>
						с WEBLEX
					</span>
				</h1>
				<span className='inline-block mt-[30px] text-[18px] leading-[22px] text-slate-200 font-light max-w-[275px]'>
					Развиваем и контролируем продажи за вас
				</span>
			</div>
			<div className='text-right text-slate-200'>
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

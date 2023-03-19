import { FC } from 'react';

// todo подумай как лучше и объежини с социальными кнопками в один компонент

const PhoneNumber: FC = () => {
	return (
		<span className='inline-block text-slate-200 text-base h-fit'>
			+7 555 555-55-55
		</span>
	);
};

export default PhoneNumber;

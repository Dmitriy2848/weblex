import 'app/App.css';

import Content from 'widgets/Content';
import Footer from 'widgets/Footer';
import Header from 'widgets/Header';

import Light from 'shared/ui/Light';

function App() {
	return (
		<div className='max-w-[1440px] mx-auto'>
			<Header />
			<Content />
			<Footer />

			<Light
				x={50}
				y={0}
				bg='purple'
			/>
			<Light
				x={0}
				y={50}
				bg='red'
			/>
		</div>
	);
}

export default App;

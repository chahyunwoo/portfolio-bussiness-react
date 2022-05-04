import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Header';

import Visual from './components/main/Visual';
import Content from './components/main/Content';

import Rooms from './components/sub/Rooms';
import Faq from './components/sub/Faq';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Join from './components/sub/Join';
import Location from './components/sub/Location';

import './scss/main.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
					<Footer />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/rooms' component={Rooms} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/faq' component={Faq} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;

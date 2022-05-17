import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Main from './components/main/Main';

import Rooms from './components/sub/Rooms';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Join from './components/sub/Join';
import Location from './components/sub/Location';

import './scss/main.scss';

import * as types from './redux/actionType'

function App() {
	const path = process.env.PUBLIC_URL;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.ROOMS.start });
		dispatch({
			type: types.GALLERY.start,
			opt: { type: 'user', count: 24, user: '195444009@N05' },
		});
		dispatch({ type: types.YOUTUBE.start });
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/rooms' component={Rooms} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/community' component={Community} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;

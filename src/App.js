import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRooms, setGallery, setYoutube } from './redux/action';
import axios from 'axios';

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

function App() {
	const path = process.env.PUBLIC_URL;

	const dispatch = useDispatch();

	const fetchRooms = async () => {
		const url = `${path}/DB/rooms.json`;

		await axios.get(url).then((json) => {
			dispatch(setRooms(json.data.rooms));
		});
	};

	const fetchGallery = async () => {
		const key = '4612601b324a2fe5a1f5f7402bf8d87a';
		const num = 24;
		const initPicture = 'flickr.people.getPhotos';
		const url = `https://www.flickr.com/services/rest/?method=${initPicture}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&user_id=195444009@N05`;

		await axios.get(url).then((json) => {
			dispatch(setGallery(json.data.photos.photo));
		});
	};

	const fetchYoutube = async () => {
		const key = 'AIzaSyAdo3TEXjvTi-2C_p9Z8zgbQD3uCz_JnAs';
		const playlistId = 'PLdHIHMgBSgjLGDg3SJwV_MdhGnap-xuXg';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};

	useEffect(() => {
		fetchRooms();
		fetchGallery();
		fetchYoutube();
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
